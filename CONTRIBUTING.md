# Contributing

## Adding a new translation

1. Fork this repo in your GitHub account.
2. Clone your fork into your computer.
3. Make a copy of `en-US.js` (you can find it inside the `i18n` folder) and start translating all the strings to your language using your favorite text editor.
4. When you finish, save it with your locale as name (e.g. `fr-FR.js` if you are working on a french translation) inside that folder.
5. Open the `i18n.js` file.
6. Look for `else langObj = enUS;` and add your locale in this format right before it:

```javascript
else if (lang === "your-locale")
  langObj = yourLocale;
```

7. Finally open `index.html` and look for this line:

```html
<script src="./i18n.js"></script>
```

8. Add a reference to your file before the previous line in this format:

```html
<script src="./i18n/your-locale.js"></script>
```

9. Now you're done, upload your changes to your fork in GitHub and make a [pull request](https://github.com/AtlasNX/web-cfw-loader/compare).

## Updating/Adding a payload

Payloads are now standard binaries, there's no need to convert them to byte arrays anymore, so adding them is now easier.

1. Fork this repo in your GitHub account.
2. Clone your fork into your computer.
3. Copy the payload you want to add to the `payloads` folder.
4. Inside the file `payloads/payloads.json` add a new object to the payloads array in the following format:

```json
{
  "name": "Your Payload Name",
  "version": "the-payload-version",
  "path": "payloads/payload_with-the-payload-version.bin"
}
```

5. To update the payload automatically you should add these things to the `extras/update-payloads.sh` script:

- Detect which version of the payload do we have on the repo and which is the latest one.
  - Use the `payloads.json` file for this and (if the payload you're adding is hosted on GitHub) the GitHub API just like the other payloads (make sure the version string format matchs whatever format is used on the source).
- Add the steps to download and copy the payload to the corresponding folder.
- Reflect the version change on the `payloads.json` file.

I know the updater script is kinda ugly, so if you want to write a cleaner, better one (preferably made in Python) PR's are always welcome! 6. Finally, upload your changes to your fork in GitHub and make a [pull request](https://github.com/lordfriky/web-cfw-loader/compare).

## **Extra:** Test your changes before making a pull request

If you want to confirm that your changes work before suggesting them follow these steps:

1. Make sure all your changes are successfully uploaded to your fork in GitHub.
2. Go to your repo settings.
3. Go down to GitHub Pages and select _master branch_ in _Source_.
4. Click _Save_ and wait a few seconds.
5. Now, you should see your site at *https://YourGitHubUsername.github.io/web-cfw-loader/*.
6. If everything is alright, now is the time to make a [pull request](https://github.com/lordfriky/web-cfw-loader/compare).
