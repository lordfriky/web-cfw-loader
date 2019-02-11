# Contributing
## Adding a new translation
1. Fork this repo in your GitHub account.
2. Clone your fork into your computer.
3. Make a copy of `en-US.js` (you can find it inside the `i18n` folder) and start translating all the strings to your language using your favorite text editor.
4. When you finish, save it with your locale as name (e.g. `fr-FR.js` if you are working on a french translation) inside that folder.
5. Open the `i18n.js` file.
6. Look for `else langObj = enUS;` and add your locale in this format right before it:
```
else if (lang === "your-locale")
  langObj = yourLocale;
```
7. Finally open `index.html` and look for this line:
```
<script src="./i18n.js"></script>
```
8. Add a reference to your file before the previous line in this format:
```
<script src="./i18n/your-locale.js"></script>
```
9. Now you're done, upload your changes to your fork in GitHub and make a [pull request](https://github.com/AtlasNX/web-cfw-loader/compare).

## Updating/Adding a payload
1. Fork this repo in your GitHub account.
2. Clone your fork into your computer.
3. Create a `.js` file inside the `payloads` folder with the name of the payload (if you are adding one).
4. Open that file with your favorite text editor.
5. **(Optional)** Add these lines at the beggining of the file, or update them if you are updating the payload, just for cosmetic purposes:
```
// Payload Name and Version
// Sourced from https://www.example.com/link/to/your/payload.bin
```
6. Add the line `const your_payload_name = new Uint8Array([` to the file (if you are creating it).
7. Go to [web-cfw-loader](https://webcfw.sdsetup.com/), select *Upload payload*, open your updated/new payload and check *Get payload byte array (don't sploit)*.
8. Press *Deliver Payload!* and copy the byte array from the log (the entire text after `Logging payload bytes...`).
9. Paste the byte array right after `Uint8Array([`.
10. Delete `, ` at the end of the array and append `]);`.
11. Save the file.

#### If you are updating a payload
12. Open `index.html` and look for the payload option.
13. Bump its version to the corresponding one.
14. Open every of the language files (the `.js` files from the `i18n` folder), look for the payload string and bump its version number too.
15. Finally, upload your changes to your fork in GitHub and make a [pull request](https://github.com/AtlasNX/web-cfw-loader/compare).

#### If you are adding a payload
12. Open `main.js` and look for the string `} else if (payloadType === "uploaded") {`.
13. Add the new payload right before it using this format:
```
} else if (payloadType === "your_payload_name") {
  payload = your_payload_name;
```
14. Save the file and open `index.html`.
15. Look for the string `<option value="uploaded"    id="optionUpload" >Upload payload</option>` and add the new an option for the new payload using this format:
```
<option value="your_payload_name" id="optionTheNewPayload" >The New Payload Name And Its Version</option>
```
16. On the same file, go down to `<script src="./main.js"></script>` and add the path to the payload right before it using this format:
```
<script src="./payloads/payloadname.js"></script>
```
17. Save it, open `i18n.js` and look for this string `document.getElementById("optionUpload").innerHTML = langObj.optionUpload;`
18. Again, append the payload option id to the previous line using this format:
```
document.getElementById("optionFusee").innerHTML     = langObj.optionFusee;
```
19. Finally, open every of the language files (the `.js` files inside the `i18n` folder) and add the payload to them using this format (you already know where):
```
"optionTheNewPayload" : "The New Payload Name And Its Version",
```
20. Congrats, you did it! Now, upload your changes to your fork in GitHub and make a [pull request](https://github.com/AtlasNX/web-cfw-loader/compare).

## **Extra:** Test your changes before making a pull request
If you want to confirm that your changes work before suggesting them follow these steps:
1. Make sure all your changes are successfully uploaded to your fork in GitHub.
2. Go to your repo settings.
3. Go down to GitHub Pages and select *master branch* in *Source*.
4. Click *Save* and wait a few seconds.
5. Now, you should see your site at *https://YourGitHubUsername.github.io/web-cfw-loader/*.
6. If everything is alright, now is the time to make a [pull request](https://github.com/AtlasNX/web-cfw-loader/compare).
