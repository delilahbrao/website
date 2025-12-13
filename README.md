## Overview

These are the main files we care about:

- `index.html`: main landing page.
- `profile/index.html`: profile page.
- `assets/`: images and icons.

## Making changes

Click on the file you want to update, then click on the "Edit this file" pen icon at the top right corner. After making the desired changes, click on "Commit changes" and confirm.

You can always ask ChatGPT for help. Copy and paste the files contents in chat gpt and ask it to make the desired changes for you. Copy the result back in githubb and commit the changes.

### Photos

To change the photos that appear on the site, just drop replacement files into `assets/images` using the same filename. Make sure the files are not too heavy so the website does not take too long to load.

### Content

To change the content of the site, update the corresponding file. For instance, to change the profile text, open `profile/index.html`, make changes to it and commit them. 

### Spotify widget

You can update the spotify widget displayed in the website by changing the `iframe` block within the `index.html` file.

1. Head to the artist's (spotify page)[https://open.spotify.com/artist/5dWRkpyqnoYDNouN02NDdk]
2. Open the playlist/album/track on you want to display in the website.
3. Click Share → Embed.
4. Customize (dark/light, size, etc.).
5. Copy the generated <iframe> and paste it in the `spotify.html` file.
