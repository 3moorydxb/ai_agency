# RAG Knowledge Base Management

## What the client gets
Ongoing curation of the client's RAG knowledge base (the index that powers their chatbot, voice agent, or AI SDR). New content added, stale content removed, retrieval quality monitored, edge cases fixed.

## What Worker does — step by step

1. **Source intake — weekly.** Client sends or worker pulls new docs: updated FAQs, new product pages, policy changes, sales scripts, support tickets categorized.

2. **Chunking + embedding — Claude Code.** Worker runs the ingestion script:
   ```
   # Example: python ingest.py --source ./new_docs/ --collection client_kb
   ```
   Confirm chunks are reasonable size (300-800 tokens), with overlap, with metadata (source URL, date, category).

3. **Retrieval quality test — Claude.ai.** Build a test set of 30 representative questions. Run them against the RAG endpoint. Score retrieval relevance 1-5. Anything < 4 = improve.
   > Claude prompt: "Here are the top-3 retrieved chunks for the query '{{QUERY}}'. Are these relevant? If not, what query reformulation, chunking change, or metadata filter would fix it?"

4. **Stale content removal — monthly.** Pull docs with date > 6 months. Confirm still valid; archive if not. Run a "is this still current?" Claude pass:
   > "Compare this chunk against the live source URL. Flag any contradictions or outdated info."

5. **Edge case fixes — as flagged by agent management.** When the chatbot/voice/SDR mishandles a topic, fix is usually in the KB (add a chunk explicitly covering it) before changing system prompts.

6. **Metadata + filtering — quarterly review.** Confirm category tags clean, no orphan tags, source attribution accurate.

7. **Monthly report — Claude.ai.** Chunks added, chunks deprecated, retrieval quality average, top failed-retrieval queries.

## Tools used
- Vector DB: Pinecone, Supabase pgvector, Weaviate, or Chroma
- Embedding model: OpenAI text-embedding-3 or Cohere embed-v3
- LangChain / LlamaIndex (or custom Python)
- Claude.ai Project — retrieval QA + report
- Claude Code — ingestion scripts, edge fixes

## Time required
- Weekly intake + ingest: 1-2 hours
- Quality testing: 2 hours/month
- Stale review: 1.5 hours/month
- Reporting: 1 hour/month
- **Total: ~8-10 hours/month**

## What to send the client
- Monthly report
- Quality score trend
- New sources ingested log

## Quality check - CTO & COO review
- Retrieval quality average > 4/5
- No chunks > 12 months old without review
- Source attribution intact on every chunk
- PII or confidential data never embedded without explicit approval
- Backup of vector DB taken weekly

## Tier availability
Scale (bundled with voice agent + RAG assistant). Standalone retainer AED 800/mo after build.
