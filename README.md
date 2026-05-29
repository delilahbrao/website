## Overview

These are the main files we care about:

- `index.html`: main landing page.
- `profile/index.html`: profile page.
- `styles.css`: shared styles for both pages.
- `script.js`: shared menu / dropdown behavior.
- `assets/`: images and icons.

## Making changes

Click on the file you want to update, then click on the "Edit this file" pen icon at the top right corner. After making the desired changes, click on "Commit changes" and confirm. They should be visible in the website shortly after.

You can always ask ChatGPT for help. Copy and paste the file's contents in ChatGPT and ask it to make the desired changes for you. Copy the result back into GitHub and commit the changes.

Hint: When editing a file, press Cmd + F to search for a piece of text.

### Photos

To change the photos that appear on the site, replace the existing photos in `assets/images`. Make sure that:
1. You use the exact same name for replacement photos!
2. The photos are not too heavy so the site doesn't take too long to load.
3. The photos have appropriate dimensions so they look good.

Hint: to figure out the dimensions the replacement photo should have, download the photo to be replaced from `assets/images` and check its dimensions (i.e., right click on it -> Get Info -> More Info).

Note: each photo also has `.webp` and `.avif` siblings (e.g. `background.webp`, `background.avif`) used by modern browsers for faster loading. If you replace a `.jpg`, the site still works, but for the speed boost a maintainer should regenerate the matching `.webp`/`.avif` (see `AGENTS.md` for tooling).

### Content

To change the content of the site, update the corresponding file. For instance, to change the profile text, open `profile/index.html`, make changes to it and commit them.

### Spotify widget

You can update the Spotify widget displayed in the website by changing the `iframe` block within `index.html`.

1. Head to the artist's [Spotify page](https://open.spotify.com/artist/5dWRkpyqnoYDNouN02NDdk).
2. Open the playlist/album/track you want to display on the website.
3. Click Share → Embed.
4. Customize (dark/light, size, etc.).
5. Copy the generated `<iframe>` and paste it into `index.html`, replacing the existing iframe inside `<div class="spotify-widget">`.

## Local preview

For maintainers working on their machine: from the parent directory of this repo, run:

```sh
node preview.js
```

It serves the site on `http://127.0.0.1:4173` with auto-reload on file changes. See `AGENTS.md` for the full developer workflow.

## Important

Do not delete the `CNAME` file! Otherwise, the website will go offline!
