(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{501:function(e,t,a){"use strict";a.r(t);var s=a(4),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"what-is-feedback-feature-useful-for"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-feedback-feature-useful-for"}},[e._v("#")]),e._v(" What is Feedback Feature useful for?")]),e._v(" "),a("p",[e._v("Aren't you tired of seeing users give feedback that is not useful like: \"chat is broken.\" Wouldn't you prefer detailed feedback?")]),e._v(" "),a("ul",[a("li",[e._v("✅ Get detailed bug reports and suggestions from users.")]),e._v(" "),a("li",[e._v("✅ Have users answer specific questions for each feedback sent.")]),e._v(" "),a("li",[e._v("✅ Ability to contact users for more information when needed.")]),e._v(" "),a("li",[e._v("✅ Users vote on feedback to help show which to prioritize.")]),e._v(" "),a("li",[e._v("✅ Easily export feedback to external dev tools like Google Spreadsheets.")]),e._v(" "),a("li",[e._v("✅ Detailed logs of all feedback.")]),e._v(" "),a("li",[e._v("✅ Users can easily submit feedback.")]),e._v(" "),a("li",[e._v("✅ Reward users for good feedback.")])]),e._v(" "),a("p",[e._v("The feedback feature is the perfect feature when you want to collect suggestions or bug reports from your users. One of the most crucial things for any gaming server, is about collecting the best feedback that can be logged internally for game developers. With this in mind, we created a flexible and customizable feedback feature that provides the best experience for not just developers but users as well for sending feedback.")]),e._v(" "),a("p",[e._v("Sound good to you? Well, let's set it up then!")]),e._v(" "),a("h1",{attrs:{id:"setting-up-the-feedback-feature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-feedback-feature"}},[e._v("#")]),e._v(" Setting Up The Feedback Feature")]),e._v(" "),a("p",[e._v("Let's go ahead and get started.")]),e._v(" "),a("p",[e._v("Go into your server settings and make sure that the Gamer role has "),a("strong",[e._v("Administrator")]),e._v(" Permissions. If this is done, you can proceed:")]),e._v(" "),a("blockquote",[a("p",[e._v(".setfeedback setup")])]),e._v(" "),a("ul",[a("li",[e._v("Creates channels for suggestions and bug reports.")]),e._v(" "),a("li",[e._v("Enable all feedback settings with default settings.")]),e._v(" "),a("li",[e._v("Sends an example of what each type of feedback looks like.")])]),e._v(" "),a("blockquote",[a("p",[e._v("After setup, you should remove the Administrator permissions.")])]),e._v(" "),a("p",[e._v("Now, take a minute to try testing out how the feedback works.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v(".idea")])]),e._v(" "),a("li",[a("code",[e._v(".bug")])])]),e._v(" "),a("p",[a("code",[e._v(".idea")]),e._v(" will begin the Q&A session with the bot asking you the questions to send for the feedback. Once you answer all of them, a new feedback will be sent in the idea channel.")]),e._v(" "),a("p",[a("code",[e._v(".bug")]),e._v(" will begin a similar session but asking the questions for a bug report. Once complete, it will send a new bug report in the bugs channel.")]),e._v(" "),a("blockquote",[a("p",[e._v("If you know all the questions, you can split your answers with | and it will work as well. As an example:\n"),a("code",[e._v(".fb idea")]),e._v(" I would suggest checking out the Gamer server and website to learn all my other features and everything you can unlock. | High")])]),e._v(" "),a("p",[e._v("Cool right? Sweet, now that you have the hang of this, let's try and customize this.")]),e._v(" "),a("h1",{attrs:{id:"customizing-the-questions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customizing-the-questions"}},[e._v("#")]),e._v(" Customizing The Questions")]),e._v(" "),a("p",[e._v("Every game has different needs and each feedback is extremely crucial to get the right information from a user. In order to perfect that, we allowed users to have the ability to customize the questions.")]),e._v(" "),a("p",[e._v("Now you can take a moment and pause here to come up with a list of questions you wants users to answer. Once you are ready, you can proceed and see how we add those questions.")]),e._v(" "),a("p",[e._v("For example, suppose you wanted to create the following questions for your bug reports.")]),e._v(" "),a("ul",[a("li",[e._v("What is the account name, IGN, that experienced the bug?")]),e._v(" "),a("li",[e._v("What is the server where the bug occurred? NA, EU, SEA, EA, SA, CN")]),e._v(" "),a("li",[e._v("What device did the bug happen on? Phone + Phone Model, iPhone X, Samsung Galaxy Note 8, etc.")]),e._v(" "),a("li",[e._v("What's the OS version of your device? Example: iOS 12.1, Android 8.0, Windows 10.")]),e._v(" "),a("li",[e._v("Describe the bug as well as you can.")]),e._v(" "),a("li",[e._v("How consistently are you able to reproduce this bug by following all the steps to reproduce above? From 1-100%")]),e._v(" "),a("li",[e._v("Include any other information you find useful here, such as uploading a screenshot of the bug.")])]),e._v(" "),a("p",[e._v("Now let's type:\n"),a("code",[e._v(".setfeedback bugs addquestion What is the account name, IGN, that experienced the bug?")])]),e._v(" "),a("p",[e._v("You can use "),a("code",[e._v("idea")]),e._v(" instead of "),a("code",[e._v("bugs")]),e._v(" for adding/removing questions related to sending an idea.")]),e._v(" "),a("p",[e._v("Go ahead and repeat this command for each of the questions above. Once you are done, it is time to remove the original 2 questions that the "),a("code",[e._v(".setup")]),e._v(" command created originally. To do that just type the following 2 commands:")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v(".setfeedback bugs removequestion What is the issue you are having?\n.setfeedback bugs removequestion Can you provide some links to screenshots please?\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("Tada! 🎉 We now have a fully custom built feedback for bugs. Take some time and customize the questions for the idea feedback type.")]),e._v(" "),a("blockquote",[a("p",[e._v("The image attachment questions should always be reserved for the last question.")])]),e._v(" "),a("h1",{attrs:{id:"understanding-the-reactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#understanding-the-reactions"}},[e._v("#")]),e._v(" Understanding The Reactions")]),e._v(" "),a("p",[e._v("The reactions that are added to feedback allow users and moderators to have quick access to various parts of the feedback feature. Let's break it down:")]),e._v(" "),a("h2",{attrs:{id:"voting-reactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#voting-reactions"}},[e._v("#")]),e._v(" Voting Reactions")]),e._v(" "),a("p",[e._v("Any user can react with these and give XP to a user. You can also remove the reaction and the XP is then removed. The XP is a perfect addition to the feedback feature because it gives users an incentive to be send good feedback. The amount of XP can be customized in detail. We will discuss this in the XP section below.")]),e._v(" "),a("p",[e._v("👍 : Whenever anyone reacts to this, it will "),a("strong",[e._v("give")]),e._v(" the original sender XP. Removing this reaction, "),a("strong",[e._v("removes")]),e._v(" that XP.")]),e._v(" "),a("p",[e._v("👎 : Whenever anyone reacts to this, it will "),a("strong",[e._v("remove")]),e._v(" the original sender's XP. Removing this reaction, "),a("strong",[e._v("gives")]),e._v(" that XP back.")]),e._v(" "),a("p",[e._v("❓: This reaction has no effect but was added for users when they are not sure whether to vote up or down.")]),e._v(" "),a("h2",{attrs:{id:"mod-only-reactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mod-only-reactions"}},[e._v("#")]),e._v(" Mod Only Reactions")]),e._v(" "),a("p",[e._v("The functionality for these reactions will only work for Moderators or Admins.")]),e._v(" "),a("p",[e._v("📬 : When a moderator reacts to this, a new Mail will be opened on behalf of the original sender. This is useful for easily contacting the sender when you need more information regarding the feedback.\n✅ : This reaction has 3 affects to it. First, it will mark the feedback as solved and delete it from the channel. Second, it will send a Direct Message to the original sender letting them know it was solved. Third it grants them bonus XP as well.\n❌ : This reaction has 3 affects to it as well. It marks the feedback as denied and deletes it from the channel. Second, it will send a message to the user letting them know it was denied. Third, it removes XP from the user.")]),e._v(" "),a("h1",{attrs:{id:"feedback-logs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#feedback-logs"}},[e._v("#")]),e._v(" Feedback Logs")]),e._v(" "),a("p",[e._v("When a feedback is reacted to with the solved or denied reactions, it gets removed. For this purpose, gamer also provides a log feature for the feedback.")]),e._v(" "),a("blockquote",[a("p",[a("code",[e._v(".setfeedback solvedchannel #channel")]),e._v(" ~ Sets the channel to send any feedback that was reacted with ✅.")]),e._v(" "),a("p",[a("code",[e._v(".setfeedback rejectedchannel #channel")]),e._v(" ~ Sets the channel to send any feedback that was reacted with ❌.")])]),e._v(" "),a("p",[e._v("It is recommended to keep these channels private from public. Usually, they are used for discussing feedback internally if needed.")]),e._v(" "),a("h1",{attrs:{id:"exporting-feedback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exporting-feedback"}},[e._v("#")]),e._v(" Exporting Feedback")]),e._v(" "),a("p",[e._v("Sometimes game developers have different internal tools that they use to track and work with feedback. To make it easy to transfer the feedback from discord to an external source we created the "),a("code",[e._v(".export")]),e._v(" command.")]),e._v(" "),a("p",[e._v("This command converts feedback into a "),a("strong",[e._v("CSV")]),e._v(" file which can be easily uploaded to a google spreadsheet or converted into anything you like.")]),e._v(" "),a("p",[e._v("To use this command, you find the message ID of the feedback you want to "),a("strong",[e._v("START")]),e._v(" at. All feedback found after this feedback will be exported into a CSV file. A maximum of 100 feedback can be exported at any time due to discord rate limits.")]),e._v(" "),a("h1",{attrs:{id:"further-customizations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-customizations"}},[e._v("#")]),e._v(" Further Customizations")]),e._v(" "),a("p",[e._v("There are a lot more ways you can customize the feedback module. To see all the options you can type "),a("code",[e._v(".help setfeedback")]),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);