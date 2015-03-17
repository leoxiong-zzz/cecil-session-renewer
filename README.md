# CECIL Session Renewer

This is a Google Chrome extension that will automatically renew your CECIL session when you are 'inactive'.

### Disclaimer

**This extension is in no way affiliated with The University of Auckland. Use at your own risk.**

By using this extension, you accept that I (Leo Xiong) will not be held responsible for any (if any) violations of CECIL's and/or The University of Auckland's Terms of Service which may result in unwanted consequences. You are aware that you are disabling a security feature implemented to prevent unauthorized access to your account in the event that it is unintentionally left open on a public computer, and this extension will make your Auckland University account more vulnerable.

### How it works

_It's a bit of a hack™_

The Chrome extension intercepts requests to [SessionAlert.js](https://cecil.auckland.ac.nz/Scripts/SessionAlert.js?) and redirects it to a modified version included in the extension. The modified [SessionAlert.js](https://cecil.auckland.ac.nz/Scripts/SessionAlert.js) bypasses the alert dialog and continues onto sending an XHR request to renew your session.

### What this does

+ Avoid seeing the 'Your session will expire in 5 minutes...' dialog every 55 minutes by renewing the session for you.

### What this doesn't do

+ **Keep your session if your computer is disconnected from the internet.** This means if your computer is not able to send things over the internet, you will be logged out.
+ Steal credentials.
+ Log key strokes.
+ Your laundry.

### License

[IDGAF License](http://dev.bukkit.org/licenses/3084-idgaf-license/), [Leo Xiong](https://leoxiong.com).

You may report any bugs or submit feature requests to me (Leo Xiong<hello at leoxiong dot com>).