# Build: RAG Knowledge Base Assistant

## What the client gets
A deployed AI assistant that can answer questions accurately from the client's own content (docs, manuals, product catalogs, policies, past tickets). Used as standalone tool or as the backbone of a chatbot / voice agent / SDR. Build price AED 9,000–40,000. Retainer AED 800/mo (see `rag-knowledge-base-management.md`).

## What Worker does — step by step

1. **Source inventory — Claude.ai.** List every document/source the client wants in the KB: website pages, PDFs, Notion/Confluence/Google Docs, support ticket history, product database, video transcripts. Estimate total token count.

2. **Architecture decision — Claude.ai with Claude API design.** Defaults Nova uses:
   - Vector DB: Supabase pgvector (cheap, hosted) or Pinecone (managed, premium)
   - Embedding model: OpenAI text-embedding-3-large or Voyage-3
   - LLM: Claude (Sonnet for quality, Haiku for cost)
   - Orchestration: LangChain / LlamaIndex or custom Python
   - Re-ranking: Cohere Rerank for top-k refinement
   - Frontend: depends on use — chat widget, Slack bot, internal web app

3. **Ingestion pipeline — Claude Code.** Open a Claude Code session in the project repo and prompt:
   > "Build a Python ingestion pipeline for {{CLIENT_NAME}}'s RAG KB. Sources: {{SOURCE_LIST}} (mix of PDFs, HTML pages, Notion exports, video transcripts). Output: a CLI `ingest.py` that (1) parses each source type (pdfplumber for PDF, BeautifulSoup for HTML, Whisper for audio/video), (2) chunks at 300-800 tokens with 50-token overlap and semantic boundaries (don't break mid-sentence), (3) embeds with {{EMBED_MODEL}}, (4) stores in {{VECTOR_DB}} with metadata fields source_url, source_type, ingest_date, category, version, (5) supports `--source` and `--collection` flags, (6) writes a schedule config for live sources to re-ingest weekly. Include retry logic, idempotency on source_url+version, and a `--dry-run` mode."

4. **Retrieval logic — Claude Code.** Prompt:
   > "Build the retrieval + generation handler for {{CLIENT_NAME}}'s RAG. Flow: query → embed (same model as ingest) → vector search top-15 from {{VECTOR_DB}} → re-rank top-5 with Cohere rerank-3 → format context as numbered chunks with source URLs → call Claude {{MODEL}} with the system prompt below + retrieved context + user query → return answer + parsed citations. Surface citations as a list of {url, snippet} pairs. Log latency at each step. Budget: target < 4s end-to-end."

5. **System prompt — Claude.ai.** Use this as the production system prompt for the RAG assistant:
   > "You are {{CLIENT_NAME}}'s knowledge assistant. Only answer using the numbered context chunks provided in the user message. If the context does not contain the answer, say exactly: 'I don't have that information in {{CLIENT_NAME}}'s knowledge base — please contact {{HUMAN_CONTACT}}.' Never invent facts, prices, policies, or product features. Every factual claim must be followed by a citation like `[1]` matching the chunk number. Format: 2-4 sentence direct answer first, then a bullet list of `[N] <one-line source description>` citations. Tone: {{TONE}}. Length: under 150 words unless the question explicitly asks for detail."

6. **Frontend — based on use case:**
   - Standalone web app — React + Vercel
   - Slack bot — Slack app + same backend
   - Embed in client's existing tool — JS widget

7. **Quality battery — 30 representative questions.** Score retrieval relevance + answer accuracy + citation correctness. Iterate chunking, retrieval, and prompt until > 90% accuracy.

8. **Cost monitoring — daily.** Estimate cost-per-query. Set budget alerts.

9. **Launch + handoff doc.**

## Tools used
- Claude API — generation
- OpenAI / Voyage — embeddings
- Cohere — re-ranking
- Supabase pgvector / Pinecone — vector DB
- LangChain / LlamaIndex — orchestration
- Claude Code — entire build
- Whisper — video/audio transcription
- Vercel / Cloudflare Workers — hosting

## Time required
- Source inventory + architecture: 4-6 hours
- Ingestion pipeline: 15-25 hours
- Retrieval + generation logic: 15-25 hours
- Frontend: 10-25 hours (depends on surface)
- Testing + iteration: 10-15 hours
- **Total: 60-100 hours**

## What to send the client
- Source list for approval (catch missing docs early)
- Architecture diagram (Claude generates)
- Staging URL for testing
- Loom walkthrough
- Handoff doc with admin access

## Quality check - CTO & COO review
- > 90% accuracy on 30-question battery
- Every answer cites source(s)
- No hallucination on out-of-scope questions (it says "I don't know")
- Latency < 4s per query
- Cost-per-query within projected budget
- Re-ingestion schedule running for live sources

## Tier availability
Scale (RAG assistant included). One-time build standalone (AED 9,000–40,000).
