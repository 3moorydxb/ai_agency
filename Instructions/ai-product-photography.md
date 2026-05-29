# AI Product Photography

## What the client gets
Studio-quality product photos generated with AI from the client's existing product images. Lifestyle shots, white-background ecom shots, contextual scenes, and seasonal variants — no studio, no shoot day, no model fees.

## What Worker does — step by step

1. **Source images — client uploads to Drive.** Worker needs 3-5 clean angles per product. If images are poor, ask client to retake on a white wall with phone in natural light.

2. **Background-removed cutouts — remove.bg or Photoshop.** One transparent PNG per product angle.

3. **Scene generation — ChatGPT image gen (gpt-image-1) OR Midjourney `cref` / FLUX Kontext.** ChatGPT image gen handles product placement best because it can take the product image as input. Prompt template (use in Claude.ai first to draft):
   > "Write 8 ChatGPT image prompts for placing this product image in lifestyle scenes that match {{CLIENT_BRAND_AESTHETIC}}. Each prompt should describe: setting, lighting, camera angle, mood, props, and explicitly instruct the model to preserve the exact product. Aspect ratios: 4x square, 4x vertical for stories."
   Then run each prompt in ChatGPT with the product PNG attached.

4. **White-background ecom shots — same flow but prompt:** "Pure white seamless background, even softbox lighting, product centered, no shadows, 4000x4000."

5. **Touch-ups — Photoshop.** Fix any AI seams where product meets scene. Color-match product to scene lighting if needed.

6. **Delivery — Google Drive.** Per product: `/{{CLIENT_NAME}}/Product-Photos/{{PRODUCT_SKU}}/` with subfolders `lifestyle/`, `white-bg/`, `seasonal/`.

## Tools used
- ChatGPT image gen (gpt-image-1) — primary, handles product preservation
- Midjourney with cref — backup
- FLUX Kontext — backup
- remove.bg / Photoshop — cutouts and touch-ups
- Claude.ai — prompt drafting
- Google Drive — delivery

## Time required
- 30-45 min per product (3-5 angles, 8-12 scenes each)
- Typical batch: 10 products = 6-8 hours

## What to send the client
Drive folder per product. Plus a contact sheet (PDF) showing all variants so they can pick favorites for Shopify product pages.

## Quality check - CTO & COO review
- Product is unmodified — no AI hallucination of features
- Logos and text on product are still legible
- Shadows realistic and consistent with scene lighting
- Color of product accurate vs. real-world (compare to source)
- White-background shots truly white (#FFFFFF check)

## Tier availability

Standalone — **AED 1,200/mo ongoing** (recurring batch each month) or **AED 2,500 one-time catalog batch** (~20-30 products delivered once).

Also bundled into the Shopify Starter Pack and Shopify Store Build deliverables.
