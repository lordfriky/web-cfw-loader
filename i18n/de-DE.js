let deDE = {
  "pageTitle"    : "Nintendo Switch Payload Loader",
  "pageSubtitle" : "Fusee Launcher portiert zu JavaScript mit der Hilfe von WebUSB.",
  "dangerDanger"   :"Es wurde einigermaßen getestet. Auch wenn bisher keine Fehler gefunden wurden, bin ich nicht schuldig, falls es zu Problemen kommt!",
  "warningWindows" :"Dies funktioniert nicht auf Windows durch Probleme mit Chrome und WebUSB (und wahrscheinlich anderen Gründen!)",
  "warningBrowser" :"Dies funktioniert bisher mit keinem Browser AUßER Chrome! Das liegt daran, dass die anderen Browser WebUSB nicht supporten!",
  "warningLinux"   :"In Linux können Sie einen 'Zugriff abgelehnt' Fehler bekommen! Falls Sie dieses Problem haben, können Sie eine Datei unter: <code>/etc/udev/rules.d/50-switch.rules</code>mit dem folgenden Inhalt:<br><code>SUBSYSTEM==\"usb\", ATTR{idVendor}==\"0955\", MODE=\"0664\", GROUP=\"plugdev\"</code>erstellen.",
  "warningTested"  :"Tests ergeben, dass es zurzeit auf Linux, OSX, Android (unrooted) und Chromebooks funktioniert. Ihr Ergebnis kann variieren.",
  "labelInstructions" :"Anleitung:",
  "liRCM"          :"Setzen Sie die Switch in den RCM und verbinden Sie es mit ihrem Gerät.",
  "liSelect"       :"Wählen Sie entweder einer der vorliegenden Payloads oder laden Sie Ihr eigenes Payload hoch.",
  "liPress"        :'Drücken Sie: "Payload senden"',
  "liAPX"          :'Auf dem Erlaubnisbildschirm müssen Sie "APX" auswählen und zustimmen.',
  "liLaunch"       :"Falls alles richtig läuft, sollte das Payload gesendet sein!",
  "h1SetupDelivery" :"Konfiguration des Payloadversandes",
  "h4SelectPayload" :"Wähle ein Payload:",
  "optionCTCaerHekate" :"CTCaer's Hekate Mod v4.6",
  "optionFusee"     :"(Re)Switched Test Payload (fusee)",
  "optionSXOS"      :"SX OS",
  "optionReiNX"     :"ReiNX 2.0",
  "optionBriccmii"  :"Briccmii",
  "optionUpload"    :"Eigenes Payload hochladen",
  "h3Log"           :"Protokoll:",
  "h4GetByteArray"  :"Erhalte das Payload Byte-Array (nicht senden)",
  "goButton"        :"Sende das Payload!",
  "clearlogsbutton" :"Protokoll leeren",
  "disclaimer1" :'Der Quellcode kann hier gefunden werden: <a href="https://github.com/AtlasNX/web-cfw-loader/">GitHub</a> (oder indem man sich den Quellcode direkt ankuckt, da kein Backend existiert!).',
  "disclaimer2" :'Portiert von <a href="https://github.com/reswitched/fusee-launcher">fusee-launcher</a>.',
  "disclaimer3" :'Danke an <a href="https://github.com/ktemkin">ktemkin</a> und <a href="https://github.com/reswitched">ReSwitched</a>, aber auch <br><a href="https://github.com/atlas44">Atlas44</a> und <a href="https://atlas44.s3-us-west-2.amazonaws.com/web-fusee-launcher/index.html">seine Webseite</a>, als einen Startpunkt für dieses Projekt.',
  "disclaimer4" :'Zuletzt danke an <a href="https://github.com/falquinho">falquinho</a> für sein Bootstraplayout und Übersetzung in Portugiesisch, <a href="https://github.com/Filo97">Filo97</a> für die italienische Übersetzung, <a href="https://github.com/tumGER"> tumGER </a>für seine deutsche Übersetzung, <a href="https://github.com/lordfriky">Lord_Friky</a> für die spanisch Übersetzung und <a href="https://github.com/lorek123">Lorek</a> für die polnische Übersetzung!.'
}
