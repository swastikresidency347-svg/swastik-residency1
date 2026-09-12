# New Residency Stay Homes — Vercel-ready website

This is a Vite + React website for Swastik Residency, Mantralayam.

## Run locally
1. Install Node.js 18+.
2. In this folder run:
   `npm install`
3. Start:
   `npm run dev`
4. Build:
   `npm run build`

## Deploy to Vercel
1. Create a GitHub repository.
2. Upload this project.
3. In Vercel, import the GitHub repository.
4. Framework preset: Vite (Vercel usually detects this automatically).
5. Build command: `npm run build`
6. Output directory: `dist`
7. Deploy.

## Current details
- Property: Swastik Residency
- Address: Nagaladina Road, Mantralayam, Kurnool, Andhra Pradesh 518345
- Phone/WhatsApp: 8328041865
- Rooms: Double, Triple, Duplex — AC/Non-AC
- Starting price: ₹2,500
- Amenities: Wi-Fi, Hot Water, Lift

The three supplied room photos are already included in `public/`.
Add the building photo/video later to `public/` and update the Gallery section.


## Admin page
After deployment, open `/admin.html` to edit the property name, starting price, room names/prices, amenities, and room images.
The current admin is a browser-local first version: edits are saved in localStorage on the device/browser used for editing. For a real multi-device admin system, connect Supabase Auth + Database + Storage.
