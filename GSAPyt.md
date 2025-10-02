# tactiq.io free youtube transcript

# No title found

# https://www.youtube.com/watch/AW1yfBKRMKc

00:00:00.000 No text
00:00:00.320 think front-end development is dead AI is taking your job and no code tools are putting you out of business think again
00:00:06.960 sure AI can spit out cookie cutter UIs but it can't craft experiences worthy of
00:00:12.559 awards or create interactions that make people stop and say "How the heck did you just pull that off?" This is where
00:00:19.840 real front-end skills and real front-end developers step into the spotlight hey
00:00:25.119 I'm Adrian and today I'll show you just how alive and essential front-end
00:00:30.240 development still is you're going to master smooth cinematic animations that transform websites from well it's
00:00:37.280 working to mindblowing your journey to becoming a standout developer starts
00:00:43.200 right here by mastering GSAP the powerful animation library trusted by
00:00:48.960 top tier agencies and creatives worldwide that as of recently became
00:00:54.079 completely free people pay thousands for these skills but today you'll get them for free i'll teach you what GSAP
00:01:01.359 actually is and why it's so powerful some pro tips tricks and common mistakes
00:01:06.400 and how to seamlessly integrate Gap with React Vue Nex.js or any other front-end
00:01:12.240 framework with plenty of engaging demos to keep things exciting and hands-on and because absorbing all of this info in
00:01:18.799 one go can be tough I've put together a free GSAP cheat sheet you can download right now keep it handy whenever you're
00:01:25.200 building out your next jaw-dropping animation so I'll leave the link down in the description but theory alone won't
00:01:30.560 cut it that's not how I roll once you're comfortable with the basics we're diving head first into creating a stunning
00:01:37.280 realworld project mojito cocktails a landing page so smooth it just might
00:01:42.320 slide off your screen think scroll triggered animations immersive parallax effects and silky smooth transitions the
00:01:49.119 kind of stuff you drool over when browsing awards before we dive in this crash course will give you a solid start
00:01:56.560 with GSAP and show you how to create beautiful fluid animations like this
00:02:01.840 cocktails website we're building today but if you want to truly master GSAP and
00:02:07.119 learn how the world's top companies build those mindblowing realworld
00:02:12.959 animations you see on sites like GTA 6's landing page well that's why I've
00:02:19.280 created the ultimate GSAP course inside the full course we go way deeper you'll
00:02:26.239 actually build a full-blown GTA 6 landing page clone from scratch using
00:02:32.239 advanced GSA techniques scrollbased animations timelines performance
00:02:37.360 optimizations real project structure and tons more you'll also get access to this
00:02:42.959 special app that references all of the animations you've learned so far and it also contains some challenges but within
00:02:49.519 the lessons is where the real magic happens here you'll be able to see exactly how they behave in real time and
00:02:56.959 how things work behind the scenes the crash course you're watching right now will give you a taste but the full
00:03:03.120 course will turn you into a pro so if you're serious about leveling up your animation skills and want to learn how
00:03:10.400 real companies build these experiences the link is below now let's get started
00:03:23.000 No text
00:03:24.720 now before we dive into the build I want to make sure you have a solid foundation i've prepared a fast-paced hands-on GSA
00:03:33.680 crash course to get you up to speed with everything you need to know and to show you just how intuitive and powerful this
00:03:41.360 library really is so in the next few minutes you'll learn how to animate elements using GAP from to and from to
00:03:50.560 methods how to control your animations with scroll trigger how to stagger
00:03:55.920 animations for maximum visual impact how to animate text like a pro using split
00:04:01.760 text plug-in and how to sequence animations one after another with GSA
00:04:07.040 timeline think of this as your GSA toolbox once you've got this down
00:04:12.640 building realworld jaw-dropping experiences will become so much easier
00:04:18.478 let's jump in i prepared a quick workshop for you and I've linked it for you in the description download it open
00:04:25.040 it within your Visual Studio Code and then we can install all the necessary dependencies by running mpm install so
00:04:32.880 let's go ahead and run the application by running mpm rundev to see what we have on it and then we can hold the
00:04:39.520 command key and click on this link to open it up as you can see I prepared seven different demos that teach you
00:04:46.000 seven most important GAP concepts so let's dive into the first one by
00:04:51.440 clicking right here and let's explore gap.2 g.2 method is used to animate elements
00:04:58.400 from their current state to a new state it's similar to gub.fro from but the
00:05:03.919 difference is that the gap 2 method animates elements from their current state to a new state while gap from
00:05:11.199 animates elements from a new state to their current state and of course you can read more about it if you head over
00:05:17.120 to the documentation page basically you can see how it works right here you target a specific element by providing
00:05:23.919 the identifier and then you specify the properties that you want this element to take after the animation runs so we are
00:05:31.199 changing the rotation and the X position throughout the duration of 1 second so now you've seen the demo right you could
00:05:38.000 have done on your own without me but see this box right here now we'll animate it
00:05:43.520 together to solidify what we just learned so going back to the code we can
00:05:48.720 split our terminal and install a new package by running mpm install gap as
00:05:54.400 well as add gap/react which will allow us to start adding those animations once that is done we
00:06:01.680 can head over to our pages and then gap 2 as that is the first element we want
00:06:07.440 to animate in this case I want you to animate the box that we have right here below so if you scroll down you can see
00:06:14.800 a div that has a class name of vwhw and then bgb blue 500 which makes that a
00:06:22.160 box and here we have an id of blue box so let me teach you how to animate using
00:06:28.240 gap in react right below this to-do we can say use gap coming from gsap react
00:06:37.600 this is a special hook which looks and behaves a lot like use effect essentially you define a callback
00:06:44.240 function and then a dependency array on when this has to run and within it you
00:06:49.600 can use gap to then animate the elements you want so we do that by saying gap
00:06:55.360 which you have to import from the original GAP package 2 and then the
00:07:00.560 first parameter to the method is the target you want to animate in this case
00:07:05.840 we can target it by ID by saying blue box then the second parameter are variables
00:07:13.039 which you want to animate so you can expand an object and let's do something
00:07:18.240 like X is 250 pixels so we animate from X of zero of course by default to X is
00:07:26.000 250 so now if you go back to your page and reload you can see how nicely this
00:07:31.520 animates and just so we can see our animation happening in real time at all times without needing to reload the page
00:07:38.160 we can add a repeat of minus one as well as a yo-yo property set to true which
00:07:44.639 will make the animation reverse on every other cycle so as you can see now it's going back and forth let's pull this to
00:07:51.280 the side so we can continue animating while we're writing the code at the same time there we go that's much better now
00:07:59.039 let's also give it a bit of a rotation property of 360
00:08:04.160 and you can see now it completely rotates we can also increase the duration to something like 2 seconds if
00:08:10.800 you do that it's going to move much slower and we can also give it a special ease property which defines how the
00:08:17.440 animation happens as you can see immediately you get a lot of different properties you can choose from for
00:08:22.800 example bounce in if you save it you can see now it kind of bounces in and then
00:08:28.639 stops you also have bounce out which going to make it bounce at the end there's a lot of these different easing
00:08:34.958 curves that you can decide to use there's also circle back and so much more in this case let's use elastic as
00:08:42.958 you can see it looks like it's on a spring right now which you have to pull and then move back and forth which gives
00:08:48.720 it a very interesting effect but with this in mind you just learned how to use
00:08:54.080 one of the fundamental methods in GSAP which is GSAP.2 property which accepts
00:09:00.399 an ID which is an identifier and then properties you want to apply to the element you're targeting you also
00:09:06.720 learned how to apply animations using the use GSA hook and GSAP within React
00:09:13.200 so with that in mind let's go back to the homepage and navigate to the second method of the day gap from as the name
00:09:20.800 suggests GSAP from is used to animate elements from a new state to their
00:09:26.000 current state similar to GUB 2 but the difference is that the from animates
00:09:31.120 from the new to the current while GUB 2 animates from their current to a new state of course you can find more
00:09:37.279 information within the docs but for now let's implement it in action i'm going to go back to gap.2 and copy this entire
00:09:46.000 part then I'm going to navigate to GSAP from
00:09:51.120 and simply paste it right here below of course not forgetting to import the use
00:09:56.959 GSAP as well as GSAP now if we modify the method from to from and modify the
00:10:04.240 ID from blue to green and save you can see that it started moving from the back
00:10:10.880 and then going to the front in this case let's explore a bit of a different ease one I like to use often which is power
00:10:18.160 one.in out this one starts with a lot of power and then slows down as you can see
00:10:24.399 it right here but the most important thing is that now it starts from the position 250 pixels in if I reload see
00:10:32.240 how it started from the right side moving to the left that is the only difference between from and to the next
00:10:39.200 method of the day is gap from to which as the name suggests is used to animate
00:10:45.360 elements from a new state to a new state similar to from and to methods but the
00:10:51.360 difference is that here you can define both states so if we scroll down we can
00:10:56.480 copy the entire thing we have here and navigate to from two so let's paste what
00:11:02.240 we copied import the hook as well as gap we can modify the method from from to
00:11:09.600 from to and you still pass a specific identifier but this time you have two
00:11:16.240 different objects you can modify we have the first object which is the from object and then we have the two object
00:11:23.760 which accounts for the two properties we want to implement so let's try to animate it from an X of zero and a
00:11:31.120 rotation of zero with something like a border radius of 0% as well
00:11:39.040 and we're going to animate it to 250 repeat minus one and let's also add a
00:11:45.120 border radius of 100% and we can also modify the ease
00:11:51.600 to something like bounce out to explore another one now if we modify the
00:11:56.720 identifier from green box to red box and save it now you can see how it turns
00:12:02.079 from a square into a circle and then comes back so we're modifying the
00:12:07.120 rotation and the X and the border radius to zero at the start and then at the end
00:12:12.320 we set it to 100 which essentially makes it a circle this is pretty useful when
00:12:17.519 you want to modify both the start and the end of an animation with that in mind those have been the three base GSAP
00:12:24.880 methods but let's explore what else we have in store next one on the list is
00:12:30.480 the GSAP timeline and the GP timeline is used to create a timeline instance that
00:12:35.839 can be used to manage multiple animations again it's similar to two from and from
00:12:42.320 two but it is used to manage multiple animations while all of these manage
00:12:48.480 just one element from their current state to a new state of course we can open up the docs to learn a bit more
00:12:54.240 about it and in this case you can see that they consider it a sequencing tool
00:12:59.279 that acts as a container for the other animations we have explored it allows you to have complete control
00:13:06.000 and manage the timing of an animation so instead of doing something like this
00:13:11.120 first do X 100 then do Y50 and then change the opacity to zero you can
00:13:16.959 create a timeline and then you can modify the elements to move on that timeline you can also control the whole
00:13:24.160 thing easily by pausing it resuming it reversing it and so much more so with
00:13:29.680 that said let's animate this yellow box and also include the play and pause button so we can navigate over to GAP
00:13:38.000 timeline and you can see at the bottom as we always do there is a div that has an id
00:13:44.160 of yellow box so first things first when creating a timeline we have to define it
00:13:49.600 by saying const timeline is equal to gap which you have to import from gap
00:13:56.880 timeline and then you call it like this next you can also pass the options
00:14:02.079 object to give it some properties like repeat minus one repeat delay of
00:14:08.639 something like 1 second and yo-yo to true we already learned what this does it simply makes the box move left and
00:14:15.920 right it simply makes the animation repeat so we don't have to reload the page to check out the animation now that
00:14:21.600 we have the timeline defined we can use the same use gap hook we have used not that long ago define the callback
00:14:29.040 function as well as the dependency array now within it we can use the timeline.2
00:14:35.760 property instead of using the gap.2 property and it works in the same way
00:14:41.519 you have seen it before it's just timeline.2 you then define the identifier which in this case is the
00:14:47.760 yellow box and the second parameter are the variables you pass to it such as the
00:14:53.600 X is 250 rotation is 360 border radius
00:15:00.000 is 100% duration is 2 and then ease is back in
00:15:08.320 out again this doesn't matter too much right now but we're just playing with the way that the animation actually
00:15:14.079 executes so if we save it now you can see how it goes from one end to another
00:15:19.920 and comes back now what we can do is we can also say timeline
00:15:26.079 again target the same yellow box and then provide another set of variables we
00:15:32.959 want to apply to this animation such as X500 scale of 1 rotation of 360 border radius
00:15:42.720 of something like 8 pixels duration of two and ease of back.in out now if I
00:15:50.880 save this you can notice that it's yellow and then it goes further out of the screen i'm going to zoom this out a
00:15:57.199 bit so you can see the full animation first it goes to 250 waits a bit and
00:16:02.800 moves to the end and then it returns now this is a bit similar to using the from
00:16:08.160 and to or the from two but what this allows us to do is to add additional
00:16:13.279 animations in the middle so we can say timeline.2 two once again where we target the yellow box
00:16:20.399 and this time we can for example do the Y of 250 scale of two rotation of 360
00:16:29.839 border radius of about 100% and duration
00:16:34.880 of two as well as the ease back dot in out now if we save this we have added a
00:16:43.279 third animation to the mix where now it will actually go down out of the screen
00:16:48.720 move back and then it's going to come back again so these animations are happening in a row one after another
00:16:56.639 which gives you a lot of possibilities to control the entire timeline now another thing you can do here is of
00:17:02.639 course play and pause it because you have complete control over the timeline so let's head over to our play and pause
00:17:09.679 button which is right here and let's expand this on click functionality we
00:17:15.839 can define an if statement and say if timeline.paused
00:17:21.039 is true then we want to trigger the timeline and also else vice versa then we want to
00:17:29.520 run the timeline.pause so if we do this and save now you can
00:17:35.919 click play pause and completely pause the execution of the animation then you can trigger it again and it works so I
00:17:43.840 think you can see the benefits of running animations within a timeline you have more control now let's move over to
00:17:51.280 the fifth method in the GSAP repertoire stagger gap stagger is a feature that
00:17:57.039 allows you to apply animations with a staggered delay to a group of elements
00:18:02.080 by using the stagger feature you can specify the amount of time to stagger the animations between each element as
00:18:08.400 well as customizing the easing and the duration of each individual animation this enables you to create dynamic and
00:18:14.960 visually appealing effects such as staggered fades rotations movements and more and of course you can find more
00:18:21.520 within GUB Stagger documentation they even prepared a little video but in essence it is as easy as using the
00:18:28.559 stagger property so let's explore it in action by navigating over to the stagger file in this case if you scroll down
00:18:36.080 you'll notice that we don't have a single box with an ID of box rather we
00:18:41.600 have multiple divs that all have the same class name stagger box so instead
00:18:47.760 of simply using an ID we'll use the class name as an identifier so same
00:18:53.200 thing goes we can use the use gap hook create a callback function
00:18:59.200 and then we can use the gap.2 method and in this case we can import
00:19:05.600 gap from gap now you might say hey we already learned two but we haven't used
00:19:11.120 stagger well stagger is just a property you can apply to any animation so we'll
00:19:16.640 use two to show this out to explain the stagger by targeting the stagger-box
00:19:24.400 and then we can provide the options in this case we can do the same thing we've done before such as Y of 250 rotation of
00:19:32.480 360 border radius of 100% to turn it into a
00:19:38.240 circle we can add a repeat of minus one as well as a yo-yo of true now if we
00:19:45.200 save this you can see they all follow the same animation as we're targeting all of the elements simultaneously
00:19:52.000 but what if we want them to animate one by one well in that case we can provide
00:19:57.520 a stagger property of 0.5 let's say so
00:20:02.559 now we can save it and you can see that now after half a second each one of this
00:20:07.840 animates one after another but it doesn't end there we can also apply more
00:20:14.000 complex stagger properties by defining stagger as an object here you can
00:20:19.440 provide the amount which is the amount of time to stagger the animations between each element and we can say
00:20:24.880 something like 1.5 then you also have access to something known as a grid grid
00:20:30.320 selects the number of columns and rows in a grid so you can say something like 2 1 then there's also the axis and you
00:20:38.480 can choose the axis along which to stagger the animations in this case we can say Y but you could also say X in
00:20:46.000 which case they all happen at the same time next you can also apply the ease
00:20:51.520 which in this case we can do something interesting like cir dot in out and now kind of they happen in a circle and
00:20:58.799 finally this is the most interesting one you can define the from which is the starting position of the staggered
00:21:04.799 animation so instead of starting from the start or the end we can say center
00:21:09.840 so this will make it start from the central staggered box as you can see now
00:21:15.520 it happens from the start and moves until the end and you can also see how they're doing two and then one and so
00:21:21.600 much more so you have complete control over how you want to stagger your elements this is great so now you know
00:21:29.360 how stagger works and how you can use it when you have multiple elements which you want to animate and let's call it a
00:21:35.679 dance of sorts the next feature on our list is the scroll trigger which is used to trigger animations based on the
00:21:42.400 scroll position so as you scroll you can animate specific things once you reach a specific point in time so for example
00:21:50.159 scroll down to see the animation and then only after you reach a specific point we want the animation to start so
00:21:56.640 let's first open up the documentation page and I always advise you to read the docs for anything you're doing there's
00:22:02.159 also a quick video right here and the simplest way is to attach a specific target
00:22:08.559 which when it enters the viewport or the screen then the animation happens or you of course have much more control over
00:22:15.360 when what over when the animation triggers in this case we can go back and go to GSAP scroll trigger and let me
00:22:22.960 show you how to implement it first of all it's very important to note that gubcroll trigger is a plug-in which
00:22:30.159 means that we have to initiate it at the top by saying import scroll trigger
00:22:37.600 from gap all and then you can do gsap which we have to import from gapregister
00:22:45.600 plugin and then you pass that scroll trigger this will make it work next with
00:22:51.520 triggers you also have to define a ref a reference so we can say scroll ref
00:22:58.559 is equal to use ref coming from react this is not gap related this is just
00:23:04.559 react then we can use the same old use gap hook coming from gap react which we can
00:23:12.000 define like we have done so far now in this case if you scroll down you'll be able to see that we have some boxes
00:23:18.559 right here now if you scroll down let's attach that ref to our boxes so if we
00:23:24.559 scroll here you can see that we have two boxes the scroll pink and scroll orange and we can attach a ref to this div
00:23:32.320 wrapping both of them by saying ref is equal to scroll ref like this now we can
00:23:40.799 scroll to the top and we can start animating so first let's get access to those boxes by saying const boxes is
00:23:49.280 equal to gap utils dot to array
00:23:56.080 and to it we pass the scroll refur
00:24:01.280 so this is how you can get the children using a react ref next we can also run
00:24:07.039 the boxes dot for each so for each box we want to
00:24:13.039 do something and that something will be a simple gap.2 animation where we target
00:24:19.440 each individual box and for each one we apply some specific properties in this
00:24:24.480 case we can say X is something like 150 rotation is 360
00:24:32.559 border radius is something like 100% scale is 1.5 we have learned that
00:24:40.559 already right so now if we scroll down you can see that they basically already turned into circles even though we
00:24:47.279 didn't see it at all because we were at the top when the animation was happening not too useful right typically you want
00:24:54.159 to have some animations when you scroll up to a specific point like if we're here we can see it sure but the user
00:25:00.880 will come from top and then we'll start viewing this at the bottom so this is where scroll trigger animations come in
00:25:08.159 to this GAP 2 property we can apply a scroll trigger
00:25:14.720 which is an object to which you can pass a trigger and then this one will be a
00:25:19.840 box so one specific box comes into view we want to start the animation let's see that once again if I start scrolling
00:25:26.799 down already it's a circle but that's because we're missing something important we're
00:25:32.480 missing the start of the animation which we can define as bottom bottom so when
00:25:37.919 the bottom of the box hit the bottom of the viewport then it will animate and we can also define when it will end and it
00:25:44.880 will end when the top of the box hits 20% of the viewport we also have
00:25:51.200 something called scrub which we can set to true which makes the animation smooth and below the scroll trigger we can also
00:25:58.159 define the ease of power one dot in out and the reason why the scroll trigger
00:26:04.000 animations are not working is because I misspelled it as scroll instead of scroll with a double L so if we fix this
00:26:11.279 now check this out i'm going to scroll to the top reload the page and start
00:26:16.400 scrolling down so now as we enter the viewport slowly you'll see how this
00:26:22.320 starts as a box because that's what it styles say by default and then slowly it
00:26:27.679 starts moving to the right and it starts applying the rotation border radius and
00:26:32.960 scale as we scroll check this out
00:26:39.120 interesting right and also it goes back immediately now another thing is that
00:26:44.720 since we're mapping over those boxes we can apply a bit of math to each one so
00:26:49.760 instead of just moving it x 150 for each one we can multiply that by boxes dot
00:26:56.320 index of a specific box so this will already applied a bit differently
00:27:02.159 because the second one has an index of one and we can also give it some default value like + 5 so now if we start
00:27:09.760 scrolling down you can see how nicely they animate and exit out of the screen we come back they are back and of course
00:27:16.559 you can keep playing with these value like top 30% which will make them go away much sooner or like something like
00:27:24.000 top 10% which will make them in the screen for a longer period of time it's up to you to start playing with this and
00:27:30.480 I just noticed we don't need a comma right here it's just bottom bottom so like this yeah that's great another
00:27:37.200 thing you can add when you're animating using the scroll trigger is if you go all the way to where you end the use gap
00:27:44.799 function which is here you can also provide a second parameter of scope is
00:27:51.200 scroll ref like this that way it will know exactly when the animation has to happen so now
00:27:58.320 I'm sure you have already noticed how useful gap is specifically simple properties like gub 2 staggering and so
00:28:05.039 on but only when you pair it with scroll triggers which will do a lot within this video and it's also covered in a lot of
00:28:12.320 depth within our ultimate guide which you can find in the description down below completely for free you notice how
00:28:18.320 it all starts coming together when you combine all of these properties and finally we have GAP text where I'm going
00:28:25.840 to teach you how to animate text elements with GSAP so to animate text you can use all the methods we have
00:28:32.240 explored so far the only thing you have to do is integrate the text plugin you
00:28:37.440 can see it in the docs basically you can add the GUB 2 and then add the text you want to animate you also have some
00:28:44.559 special properties for animating text elements so let's head over to text and
00:28:49.840 you can see an H1 here that says GAP text but it's nowhere to be found on the screen it's kind of like it's being
00:28:56.159 hidden right and that's because it is at the start the opacity is zero so let's
00:29:02.080 go ahead and animate it in we're going to use the same old tips and tricks like use gap coming from gap react where we
00:29:10.399 have our callback function then we will define gap.2
00:29:16.159 which we have to import from gap we target the text element by id of text
00:29:22.399 and then we provide some properties like ease which will be power one.in out once
00:29:29.279 again you can go without this or you can find the ones that you like and then add different eases and then I'm going to
00:29:35.279 add opacity of one as well as Y of zero
00:29:40.320 so this is nothing new right we're just changing some properties using GAP 2 and you can see how nicely it slides in
00:29:48.000 great now let me also teach you how to animate the paragraph you can see this
00:29:53.279 parak class name right here it combines all of these properties that you can see
00:29:58.320 so let's add a gap from two in this case and we can target the parara which is
00:30:05.840 the paragraph and then as you know with from two you have to define two different objects and
00:30:12.480 at the start this text is visible we didn't apply an opacity zero like we did here so you can apply it here in from
00:30:20.159 opacity zero Y of 20 and then of course it's going to break until you provide a
00:30:25.679 second object where you can reset the opacity to one and Y to zero so now you
00:30:32.000 can see how nicely it fades in we can also apply other things we learned such as the delay between the elements as
00:30:39.360 well as the stagger of 0.1 so now different paragraph elements are
00:30:45.840 going to animate one after another and with that we came to the end of this little GAP workshop all right you just
00:30:52.000 No text
00:30:53.520 flew through the fundamentals of GSAP and saw firsthand how quickly you can make things on your site move and we're
00:31:00.480 just getting started now it's time to put your skills to the test by building
00:31:05.600 a real project from scratch a visually stunning landing page for a brand called
00:31:11.679 Mojito Cocktails we're talking scroll triggered animations immersive parallax
00:31:17.200 effects and elegant transitions that'll have your site looking like it belongs on awards we'll build four additional
00:31:24.640 sections loaded with even more animations you can watch the whole thing on jsmastery.com
00:31:30.720 with interactive live demos for hands-on experimentation byite-size challenges to
00:31:36.080 reinforce key concepts quizzes designed to lock in your learning step-by-step git commits to track your progress
00:31:42.320 clearly and deep dives later on so first you build this entire cocktail website
00:31:48.240 to get you going with Gap but then we take a step back and dive under the hood
00:31:53.519 of how GE works and how you can become a top 1% GE developer the link is in the
00:32:00.000 description but if you want a taste let's bring this project to life first starting with setting up the app
00:32:06.000 No text
00:32:08.240 before we start developing this amazing animated Gap Cocktails landing page I
00:32:14.799 first want to go over the tech stack that we'll use to make it happen of course the star of the show will be Gap
00:32:21.600 which as of recently became completely free for everyone it is one of the only
00:32:27.679 and the best JavaScript animation libraries out there and in this video you'll learn how to build this website
00:32:34.000 using it but if you want to take it to the next level go ahead and check out the ultimate GAP course linked down in
00:32:40.640 the description now I invite you to use any framework or library you want to
00:32:45.840 build this application for example you could use Nex.js or maybe you could use
00:32:51.840 Vue but in this case I'll be using React either one works you can follow along
00:32:58.000 and build it using your library but the simplest way to spin up a React application is using a build tool called
00:33:05.840 VIT so head over to vit.dev and click get started and then if you scroll a bit
00:33:11.600 down you'll see the installation command to spin up your project so let's copy it and head over within your IDE in this
00:33:19.600 course I'll be using WebStorm webstorm is a powerful IDE that as of recently
00:33:25.760 became completely free for non-commercial use before you needed to pay a lot of money to be able to get all
00:33:31.679 the features that you can get out of an IDE as to when compared to a simple text editor but now you can download it
00:33:38.880 completely for free and follow along and see exactly what I'm seeing so later on if you see some cool feature right here
00:33:45.360 built into my IDE well you know it's coming from WebStorm oh and with WebStorm you can also get access to Juny
00:33:52.159 which is a smart coding agent that does more than just recommend the next line you want to type in it is so smart that
00:33:58.480 it can modify the entire codebase given your prompt increasing your productivity more than ever once again the link for
00:34:04.640 Juni as well will be down in the description i'll be using it later on throughout this course so it might be
00:34:09.679 good to just download it right away with that in mind I'll just paste the mpm create vit add latest command into my
00:34:16.320 terminal i just created a new empty folder on my desktop and called it JSM
00:34:21.440 Gap landing and I'll add the dot slash at the end because I want to create a new React
00:34:28.000 project within the current repo so press enter it'll ask me whether I want to
00:34:33.280 install the following packages so I'll say yes and now we'll have to answer a couple of questions first I'll say
00:34:39.839 ignore files and continue then I'll choose my framework which will be React
00:34:45.119 and then we have to choose the variant that we want to use in this case I'll go with JavaScript
00:34:50.480 and that's it now we just have to run mpm install and as you can see my webtorm automatically tells me that it
00:34:56.719 can do that for me and once the packages are installed you can just run mpm rundev to spin up this project right
00:35:04.000 within our local host 5173 if you do that you should be able to see just a very simple Vit and React boiler plate
00:35:12.880 but now we want to clean it up so we can create a clean slate so we can start working on our animated gap website so
00:35:20.079 back within our code let's remove the existing app.jsx within the source folder also remove the app.css
00:35:27.760 file and remove the entire assets folder since we won't be needing these default
00:35:32.880 assets also remove all of the styles from index.css because we're going to replace them with
00:35:39.119 our custom tailwind classes very soon and now just so we can show something on the screen create a new app.jsx
00:35:47.520 and run rafce right within it which will quickly spin up a new react air function
00:35:53.359 export component that looks something like this if you did that properly back on your localhost 5173 you should be
00:36:00.480 able to see just a single app text now let's also install the most important
00:36:06.160 dependency needed to run this project and that is of course gap so I will
00:36:11.440 actually open up a new terminal window and I'll call it terminal and I'll
00:36:16.640 rename our first one to app because on this one we want to keep running the app and here we want to run additional
00:36:22.240 commands so let's install by running mpm install the gap library at gap slreact
00:36:32.000 and we'll also need an additional library called react responsive which will help us with the animation logic
00:36:38.880 and the layout behavior based on the screen size and press enter this will
00:36:44.160 now install these packages and you can immediately notice that GAP is super lightweight because it got installed in
00:36:51.040 1 second now that we installed GSAP we have to put it to use and we can do that
00:36:56.720 by using its two plugins so right here on top of our app I will say import and
00:37:03.359 I'll get here the scroll trigger as well as split text plugins coming from GAP
00:37:10.880 all and we want to register these within the app by saying gap.register
00:37:17.200 plugin and then we want to pass the scroll trigger as well as the split text
00:37:22.880 we want to do it within the app because these gap plugins aren't automatically active you have to register them and
00:37:30.000 this line makes sure that both plugins are ready to use globally across your
00:37:35.040 application you only need to do this once so putting it in the app file is a
00:37:40.240 great choice the scroll trigger plugin will allow us to animate things based on the scroll position like pinning
00:37:47.119 scrubbing or triggering and split text will allow us to break text into individual words or characters for
00:37:54.320 detailed text animations great so now that the GSAB basics are set up let's
00:37:59.760 also set up Tailwind tailwind CSS is a utility first CSS framework packed with
00:38:05.920 great utility classes that are going to simplify our styling but still allow us to make our application as unique as
00:38:13.599 ever so let's follow its getting started guide to quickly install it we're using
00:38:19.040 Vit so that is super simple we just have to copy this command and paste it into
00:38:25.520 our terminal that is mpm install tailwind css and at tailwind css/vit
00:38:32.640 once you install it you want to configure the vit plugin by modifying the vitconig.ts file so let's copy this
00:38:40.800 import and let's head over into vit.config.js
00:38:46.000 and alongside the React plugin right after it we also want to add Tailwind
00:38:51.359 CSS which is coming from Tailwind CSS/V after that we want to head over into our
00:38:58.000 index.css and say add import tailwind CSS which will allow us to use
00:39:05.200 all of the Tailwind styling functionalities and to test whether the Tailwind CSS installation is working
00:39:11.280 within this div let's create a new H1 and give it a class name of something
00:39:17.520 like text-3XL and text- indigo 300
00:39:24.480 and we can make it say something like hello GSAP now just before we test it out let's also make sure that we have
00:39:31.200 access to this GSAP coming from the GSA library there we go
00:39:37.040 and back within the browser you should be able to see a text that is larger colored and says "Hello Gap." Let me
00:39:45.119 zoom it in for you so you can see it a bit better perfect now to be able to
00:39:50.480 style the rest of this application more easily we can immediately make our life easier by creating a couple of classes
00:39:57.280 called utility classes see a utility class is something that looks like this
00:40:03.119 you say at utility and then define the name of that class name such as flex
00:40:09.280 center then you apply a specific number of class names that would be added
00:40:15.839 together as soon as you use this flex center for example you want to make it a flex container justify center and items
00:40:24.400 center so if you do this head back over into
00:40:29.440 app and now give this div a class name of flex center which is not a default
00:40:37.680 class but it is a utility class we have added right now you can see that now it's fully centered so to make the
00:40:44.960 styling of our application more convenient in the description down below I'll provide a link to a video kit for
00:40:51.839 this project then if you scroll a bit down you'll be able to see a complete index.css file copy it and override your
00:41:01.200 current index.css first we import a custom font from Google fonts at the top then we import
00:41:08.079 Tailwind CSS and then we add an additional font face allowing us to load a local font from our public folder then
00:41:16.480 we give it a name so we can reference to it later on within our Tailwind CSS classes i'll show you how we can add it
00:41:22.640 to our public folder very soon after that we define a theme you can define
00:41:28.000 different colors such as the primary yellow color or maybe an off-white and then we set different fonts
00:41:35.280 we do a bit of a cleanup on the HTML and body tags where we set the width to 100
00:41:41.839 change the background color to black and the color to white and set the scroll behavior to smooth and then we have a
00:41:48.319 bunch of these utility classes which are on their own not providing anything special but are making the styling of
00:41:54.960 our application simpler for example if you want to apply a gradient with all of these classes we just have to say text
00:42:02.000 gradient there are a couple more of these ones such as the masked image and then the components themselves so if we
00:42:08.960 want to automatically style a nav as soon as we use this tag we'll automatically apply specific class names
00:42:15.359 to it and the elements within it as well for example the P tag within the navbar
00:42:21.200 will automatically have this font applied as we use some of these classes later on such as this noisy class which
00:42:27.839 will add a background image that will make the background feel a bit old school well I'll show you that we use
00:42:34.640 this class and then explain exactly what it is doing but for now what matters most is that you have access to this
00:42:41.200 index.css file right here within your code now if you close it and get back to
00:42:47.040 your app file and give this div an additional class name of h dash which
00:42:52.720 stands for height but then if you use quer brackets we use this in tailwind when you want to provide a custom value
00:42:59.599 such as 100vh which stands for full vertical height if you apply this change
00:43:05.520 and save it and then go back in the browser you should see that now our text
00:43:10.720 should be very big well at least it would be big if you zoomed in at 500 like I did and it should be entirely
00:43:17.760 centered on a dark background which means that you have successfully implemented all the styles and set up
00:43:25.119 the initial configuration of the application which means that immediately in the next lesson we'll be able to dive
00:43:30.240 into the first part of the UI which in this case is a simple navbar but now
00:43:35.359 that you have actually set up the application that's something to be a proud of and to start forming good
00:43:40.960 habits it is recommended that we always commit something to GitHub no matter how
00:43:46.480 small the feature is so since I want to teach you the best practices let's actually create a GitHub repo for this
00:43:53.119 project from the start head over to github.com/new and create a new repo which I'll call
00:44:00.720 gap cocktails make it public or private whatever you
00:44:06.880 prefer and click create repo next you'll have to follow the following
00:44:12.800 steps in order to be able to push it but I think we only need to copy this get
00:44:18.319 remote add origin because it contains our unique URL so copy this entire line
00:44:24.560 go back to your application and open up your terminal here type get init
00:44:32.000 dot get commit dash m initial commit
00:44:38.960 get branch- m main then paste the get remote add origin and
00:44:46.480 finally say get push-u origin main which will push the code you
00:44:52.640 have so far on your branch so if you head back over to GitHub and reload the
00:44:57.920 page you can see that your code is now live right here under the initial commit
00:45:03.440 now we're doing this for a couple of reasons first of all to create good GitHub habits where you can actually
00:45:09.839 push your code after every feature second of all if some recruiters take a
00:45:14.880 look at your projects it's not good to just see a final commit with all the code rather they want to explore the
00:45:21.520 commit history to see you have actually been committing consistently which means that you yourself have developed the
00:45:27.280 project if you do it properly it should look something like this where for my previous project I have about 20 commits
00:45:34.000 where you can see where we have implemented every single feature and another reason why I'm doing this is
00:45:39.920 because on jsmastery.com you can watch this same course but split
00:45:45.359 into lessons so if you find this course and click resume where you left at the bottom of each lesson such as this
00:45:52.160 project setup we're on right now within YouTube you can check out the lecture summary the transcript
00:45:58.800 some notes but also a special commit for each one of the lessons so you can know
00:46:04.880 exactly which code has to be implemented for that lesson that'll look something like this like if you implement a
00:46:11.200 navigation bar you can see that we're only adding the navbar and nothing more
00:46:16.720 that way you can follow along and even if you get lost you'll be able to get back on track oh and by the time you're
00:46:22.880 watching this video the ultimate GAP course will have been released so go
00:46:28.079 ahead and check it out as it might provide you some additional insights into how GSAP works and then you can
00:46:34.480 build out this cocktails website and truly understand the behind the scenes of the animations that GSAP powers so
00:46:42.880 great job on completing the most boring part of this course the setup now immediately in the next lesson you'll
00:46:49.760 develop your first UI component let's start with the first piece of our
00:46:52.000 No text
00:46:56.880 UI the navbar the component that will set the stage for the navigation and
00:47:01.920 include a smooth scroll animation powered by Gap so create a new folder
00:47:08.560 right here within the source folder and call it components
00:47:14.640 then within components create a new file and call it navbar.jsx
00:47:21.119 and within it you can run rafce to quickly spin up a new navbar component
00:47:27.599 now that you've created it head back into the app.jsx clear this div that we
00:47:32.800 have right now instead create a main tag which means that this is the main part of our content and within it just render
00:47:40.319 a self-closing navbar component coming from /components/navbar
00:47:46.240 if you've done that properly you should be able to see just the navbar at the top left of your browser now I'll put my
00:47:51.680 browser side by side with my editor so we can see the changes that we make live let's head over into that navbar turn it
00:47:58.400 into an HTML 5 semantic nav tag with a div and within this div we can render an
00:48:05.280 anchor tag that'll have an href pointing to hash home so once we click on it
00:48:10.720 it'll lead us to the hero section i'll give it a class name equal to flex items
00:48:17.359 center and a gap of two and right within it we can render a p tag that'll render
00:48:22.640 the name of our imaginary cocktail bar for now I'll do something like velvet
00:48:29.680 poor there we go and this will be a part of our logo i'll add the logo soon but
00:48:35.200 before that head over below the anchor tag and create a new ul an unordered
00:48:40.319 list within it open up a new dynamic block of code and create an array
00:48:46.160 that'll have different objects within it each one of these objects will have a
00:48:51.920 title of something like about us and it'll also have an ID so that we can
00:48:58.319 scroll to it which will be something like about and now we can create a couple of these objects right here each
00:49:05.520 one within its own line but if you do that you'll quickly notice that your
00:49:10.960 application or your code would get pretty cluttered so instead I like to do those within a new file called constants
00:49:18.880 so right here within the root of our application create a new folder and call it constants
00:49:24.960 and within constants create a new file called index.js
00:49:30.240 and within it we can create a new const nav links and make it equal to an array
00:49:36.720 where we can have those multiple objects each one having an id of cocktails in
00:49:43.200 this case as well as a title and now we can do the same thing for for example the about
00:49:50.079 section so ID is about and title is about us now you want to export that
00:49:56.319 just so we can use it within the other file and if you head back over to our navbar now you can just simply say nav
00:50:03.839 links make sure to import it from constants index.js map and you can now map over each one of
00:50:11.680 these links and then for each one you can automatically return an LI a list
00:50:16.720 item now what do I mean by automatically return i mean using parenthesis right here instead of curly braces because if
00:50:23.839 you used curly braces then you would have to add a return keyword right here
00:50:29.520 but if you use just the parenthesy it'll return this automatically this LI since we're mapping over it has to have a key
00:50:37.280 and the key will be equal to link ID because it's unique and within the LI we
00:50:42.720 can render the anchor tag with an href of dynamic template string of hash and
00:50:49.119 then the link ID and it'll render the link.title within it so if I save this
00:50:56.240 you can see that now it says Velvet Pore and we have cocktails and about us which are the two links within the nav links
00:51:02.640 array now on top of just having the two links we want to have more of them and just so we don't have to type all of
00:51:09.040 them by hand I actually want to provide you with the complete constants file so open up the video kit scroll down and
00:51:16.160 there just below the index css you'll also be able to find the constants index.js file copy it and paste it right
00:51:24.640 here you'll notice that alongside the nav links which we have right here we
00:51:30.160 also have a couple of other things that we might want to render later on such as the cocktail lists mocktail lists
00:51:37.920 profile lists and feature lists these are all just different arrays of text
00:51:44.000 that we want to display on our landing page just so we don't have to type them by hand and put them within our JSX
00:51:50.640 we're keeping them in one single place so that if you maybe give this website over to a cocktail website owner they
00:51:58.319 can come into this file and just change their opening hours themselves they don't necessarily have to dive right
00:52:03.839 into the code and mess with the code right here perfect oh and within this video kit you can also find a Figma
00:52:10.640 design so go ahead and click on it and you'll be redirected to a Figma design
00:52:15.839 that our JSM designer has prepared specifically for you completely for free where you can find the entire design of
00:52:23.119 this application right here and you can go ahead and develop it on your own if you want to or you can follow along with
00:52:29.839 this course one thing that you'll notice right here is that this website has a lot of assets starting with the small
00:52:36.000 ones such as this logo right here next to the Velvet Pore which is the title of the company on the top left also these
00:52:43.040 leaves maybe this primary video that we want to animate as well as some other
00:52:49.200 leaves and more photos that we want to display of just people having a good time and enjoying our cocktails so in
00:52:56.960 order to be able to get all of these assets you could go ahead and explore the design click on it multiple times
00:53:04.319 until you get to the actual image and then you can just export it as a PNG JPEG or something else that's totally
00:53:11.200 okay but these assets have long names and it's easy to get lost into all of this naming and it will take some time
00:53:18.319 so I took some of my time to save the time for you and I collected all of these assets into a single zip folder
00:53:24.960 that I shared within Google Drive once again the link will be down below the lesson or within the video kit so just
00:53:31.040 go ahead and download it once you do that unzip it and you'll see that in there you have a couple of different
00:53:36.400 folders just take this public folder and drag and drop it right within your source folder once you do that you'll be
00:53:43.680 able to see the different fonts that we're using as well as some images that we'll use later on within our
00:53:49.040 application so if you head back over to the navbar right within our p tag where
00:53:54.079 we have our text we can also render an img with a source of forward/ images
00:54:02.240 forward slash logo.png and we can render an al tag of logo if
00:54:07.839 you do that you'll notice that you can't access your logo just yet that's because in V applications the public folder
00:54:13.839 should be within the root of the application not within the source folder so just delete the default one that is
00:54:19.520 already over there and then move this new one into the root of your application as soon as you do that
00:54:25.040 you'll see an error so head over into your app terminal stop it from running and then rerun it again by running mpm
00:54:31.680 rundev as soon as you do that your assets will be taken into account and now you should be able to see a little
00:54:38.480 logo right here on the top right and not just a broken image
00:54:43.680 also you can head over into your index html and instead of saying v SVG you can
00:54:49.280 say images logo.png so that your favicon gets updated as
00:54:55.119 well and there you have it this is our navbar if you expand it you can see that it looks great on desktop devices as
00:55:01.760 well but now what we have to do is that when you scroll we actually want to apply this glassy background so that
00:55:09.119 when the text goes over some other text it is still fully visible and not
00:55:14.160 interrupting our viewing experience of course we won't be able to test it just yet because we cannot scroll as there's
00:55:20.400 no other content but I can show you how we can implement it and this is actually going to be the first time we're going
00:55:26.480 to use Gap in this application right at the top of our component I'll say use
00:55:32.400 GSAP and you can import this from add GSAP react this is a helper hook that
00:55:38.000 allows us to very easily use gap within our application you can define a callback function right within it and
00:55:44.000 then you can define a timeline by saying const nav tween now why did I call it a
00:55:50.480 tween well tweening in animation is short for inbetweening and it's the
00:55:56.000 process of generating images that go between different key frames that's a very technical explanation but it'll
00:56:02.319 start making more sense as we start implementing it and of course if you want to truly understand how it works behind the scenes then go ahead and
00:56:09.040 check out our Gap course link down below but for now I'll also get access to the
00:56:14.160 original GSAP library by importing GSAP from Gap and then I'll say timeline so
00:56:21.040 we're starting to build a GSAP timeline that will be based off of a scroll trigger and the trigger will be the nav
00:56:29.839 specifically we'll start it from the bottom to the top what is this means
00:56:35.520 well these two properties control when the scroll animation starts and ends and
00:56:42.079 the first part is referring to the elements position so the position of the nav and the second one is referring to
00:56:47.680 the viewport position in this case when the bottom of the navbar reaches the top
00:56:54.640 of the viewport that's when we actually start applying a specific class so now
00:57:00.000 that we know when the animation will start applying we can say what will happen so I will say nav tween dot from
00:57:10.000 two and this from to is a method that ensures that the nav always starts from
00:57:15.599 a known style which is going to be transparent and it ends with a specific effect so the first parameter is the
00:57:22.799 target that we want to animate then we have the duration then we have the from variables the two variables and the
00:57:30.000 position so I'll say nav then I'll say that we start with a background color
00:57:36.720 set to transparent and then I will say how it will end we want to end it with a
00:57:43.359 background color of hash 000000
00:57:48.799 which is black but I'll also end it with 50 which in hexadimal is 30% so it'll
00:57:55.119 have the opacity of 30% i'll also give it a background filter which will be set to blur 10
00:58:03.520 pixels and finally I'll give it a duration of 1 second and
00:58:10.319 you can also choose the ease which I'll set to power one dot in out which is how
00:58:16.400 that animation will actually play out this will create a smooth animation now it looks like I didn't properly close
00:58:22.480 this background color but as soon as I do that you can see that it's no longer complaining and now it's pretty clear
00:58:28.160 what's happening so later on once we add additional sections and when we allow the user to scroll down as the bottom of
00:58:34.880 the navbar reaches the top of the viewport that's when it'll actually turn from a transparent background to a dark
00:58:42.319 blurry background that allow us to read the text even though it's showing on top of the other elements great so now that
00:58:49.119 we have the navbar let's move over to the most important part of this course and most likely the reason why you
00:58:55.359 clicked on this course in the first place and that is the hero section with this sick animation where the ice cube
00:59:02.720 falls into the cocktail and animates as we continue down the screen
00:59:07.000 No text
00:59:08.880 let's get started focusing on the most important section of this course this animated hero section first we'll start
00:59:16.880 just on the layout and the structure and then later on we'll animate it using GAP
00:59:22.480 to create this smooth and interactive experience so back within our code create a new component and call it
00:59:30.000 hero.jsx run rafce right within it and then just
00:59:36.079 import that hero section right within our app below the navbar by saying hero
00:59:42.960 and autoimp importing it right here webtorm does that nicely automatically for me now let's develop the structure
00:59:49.680 of the hero section by wrapping it in an empty react fragment and then within it
00:59:55.280 creating a new section with an ID equal to hero so we can scroll to it and a
01:00:01.760 class name equal to noisy as you can immediately see this noisy class name
01:00:07.680 adds a background image that makes it seem a bit old school so if you want to see how this noisy exactly works head
01:00:14.880 over into our index.css CSS and you can see that it is just applying a full-size
01:00:20.000 noise background image within it we can render an H1 that will have a class name
01:00:26.079 equal to title and it can be the name of a cocktail of your bar or whatever you
01:00:32.079 want it to be i'll go with something like mojito sounds interesting and looks good
01:00:38.079 then right below it I'll render an image with a source of forward slashim images
01:00:44.559 slash her leftleaf.png with an al tag of left leaf and a class
01:00:53.040 name equal to left leaf as well now you
01:00:58.400 can see that leaf right here at the bottom on mobile devices i want to duplicate this image right
01:01:05.280 below and what I'll do is just rename all of the keywords to right instead of
01:01:11.200 left so hero right leaf the al tag and the class name of right leaf as well if
01:01:18.799 you do that you'll see another leaf appear right here next below these images let's render a div that'll have a
01:01:27.680 class name equal to body and within it another div with a class name equal to
01:01:36.960 content because we're going to put the majority of our content within this div so let's create another div that'll help
01:01:43.599 us with the layout so we can give it a class name of space-y-5
01:01:50.559 to create some spacing in between the elements it'll be hidden on small devices but it'll be showing on medium
01:01:58.079 and larger devices so we can set it to block within it I'll render a P tag of
01:02:04.240 cool crisp and just classic and another P tag below it with a class name equal
01:02:12.240 to subtitle that'll render a text of sip the spirit
01:02:19.440 with a break of summer yep that definitely sounds good now we cannot see
01:02:26.400 it on a mobile device but if we expand it just a tiny bit you can now see cool
01:02:32.319 crisp classic s the spirit of summer and on larger devices it'll actually get
01:02:37.760 moved to the bottom left so we have enough space to show our primary part of
01:02:43.680 the page great so now let's head below this div that has the space of Y5 and
01:02:51.520 let's render another div that'll have a class name equal to view cocktails and a
01:02:59.040 p tag right within it that'll have a class name of subtitle and here we can
01:03:05.839 put some text now I don't want to just imagine some text or generate it using AI so I'll head over into my Figma
01:03:13.520 design and just copy this piece of text that I can see right here every cocktail on our menu is a blend of premium
01:03:19.920 ingredients creative flare and timeless recipes designed to delight your senses
01:03:25.680 this wasn't written by Chad GPT not at all and below this P tag we can render
01:03:31.039 an anchor tag that'll have an href pointing to hash cocktails and it can
01:03:37.920 say view cocktails so now if we go back you can see that we have both the left
01:03:43.599 and the right side and this will eventually lead to the bottom page but we have still left some space for the
01:03:50.079 primary part which is that drink now before we show something right here let's first focus on the animations see
01:03:57.440 if I head over to the final website you can see that first of all the primary text animates then we see the text at
01:04:04.960 the bottom left and finally then the text at the bottom right so let's animate it right at the top of the hero
01:04:11.680 section we can use the use gap hook
01:04:17.440 make sure to import it from gap react create a callback function and as the
01:04:23.280 second parameter give it an empty array which means that this will only have to run at the start next we can define a
01:04:30.000 couple of different animations first I'll define one called hero split where
01:04:37.119 we can use the split text gap plugin that'll break our text into smaller
01:04:42.400 pieces so we can animate them individually so I'll make it equal to new split text
01:04:48.799 which we have to import so I'll say import split text coming
01:04:54.480 from GAP all and don't forget to import the GSAP itself by saying import GAP from GSAP
01:05:03.440 perfect then I'll say that we want to target the title class name and we want
01:05:08.480 to split it into both characters and words so I'll say type will be chars
01:05:16.400 characters and words now we can do the same for the paragraphs so I will
01:05:21.599 duplicate this i will say paragraphs or paragraph split and make it equal to new
01:05:28.319 split text where we're going to split the subtitle class name into just lines
01:05:36.640 not characters not words but lines what does this mean well if you take a look
01:05:41.839 at the finished website notice how we split the first one by each letter and the other ones are split line by line so
01:05:49.359 we don't animate the characters themselves but only line one line two three four and so on perfect now that we
01:05:56.640 have split those characters of the hero section we can actually apply some animations so I will say herplit.chars
01:06:06.480 or characters do for each character we want to apply a class name
01:06:14.559 by saying char.class list.add add and I'll apply a class of
01:06:20.960 text gradient this text gradient is a utility class
01:06:26.079 within index.css which adds a bit of a dark gray color to the text it'll be
01:06:31.920 applied before animating so if I reload you should be able to see that now the letters seem to be a bit more 3D as they
01:06:39.760 have a gradient very slight one from the bottom to the top now let's use gap to
01:06:45.760 animate each one of these characters by saying gap from herplit.jars
01:06:53.359 and we want to first set where they're coming from so they're starting from y%
01:07:00.160 of 100 they're starting from a duration of 1.8
01:07:06.000 with an ease of expo expo out gives a smooth springy feel and finally a
01:07:13.200 stagger of 0.006 which means that each character will
01:07:18.400 come in after another creating a wave effect after 0.06 seconds so now if I
01:07:25.440 reload you can see how already the letters start coming from down below and move up and they align very nicely you
01:07:33.520 can totally slow this down by staggering them by 1 second for example and now you can see exactly what is happening
01:07:40.559 although please I beg you never do this in real production websites even though it might be cool you want your websites
01:07:48.559 to feel fast and if you have long animations they're just not going to feel fast so I found 0.00.6 or five to
01:07:57.920 work very nicely just so it's visually interesting but it doesn't negatively impact the user experience next let's
01:08:04.880 animate the lines of text of these paragraphs so I'll say gap dot from
01:08:11.599 paragraphsplit.lines we want to animated from opacity of zero
01:08:18.238 initially y% of 100 duration of 1.8
01:08:26.319 ease of expo.out stagger of also 0.06
01:08:33.120 and a delay of one what this delay does and it's super important is that it
01:08:39.040 means that it'll start one second after the headline animation finishes so now
01:08:44.560 if I reload you can see that these lines will start animating only a second after
01:08:50.960 this finishes if you remove the delay then everything will happen at the same
01:08:56.399 time which is just too much to see so we want to delay it purposefully so we have
01:09:02.719 this nice animation great next we want to animate the two leaves in the hero
01:09:08.158 section when the user scrolls but for the animation to trigger the page needs some scrollable content so head back
01:09:15.600 over into the app.jsx and let's just add a temporary div with
01:09:21.600 the full height just below the hero section which will allow us to test the scroll-based animations so I'll say div
01:09:29.520 with a class name equal to h
01:09:34.560 dvh which is a full height and a bg of black so now you can see that we can
01:09:40.640 scroll into nothingness this allows us to test the navbar effects that we have
01:09:46.238 but it'll also allow us to test the scroll on the leaves so now we can go
01:09:51.839 back to the hero section and below the animations of the text we can add the
01:09:57.120 animation for the leaves by saying gap timeline this one will be based on the
01:10:03.520 scroll trigger and we have to watch the trigger on the hero section so once we
01:10:09.040 reach it we will start when the top of the homepage hits the top of the screen
01:10:14.960 and we will end when the bottom of the homepage hits the top of the screen and
01:10:20.320 we can also add a scrub to this which means that the animation progress will
01:10:25.520 be directly related to the scroll which will make it feel natural so what
01:10:30.560 animation do we actually want to give to it well we can say dot2 dot right leaf
01:10:37.360 we'll give it a y of 200 and zero and
01:10:43.360 then I'll apply another dot2 this time to the left leaf i'll give it
01:10:50.320 a y of minus 200 and zero as the second parameter now if you save it and reload
01:10:58.159 as you scroll down you'll notice that the top leaf moves up as we scroll and
01:11:04.960 the right leaf moves down as we scroll creating this very interesting effect
01:11:11.360 pretty cool right almost feels like we're in a jungle so what we have done so far is animated the title as well as
01:11:18.800 the paragraphs below we animated the characters and added staggered motion
01:11:24.800 and then we used the scroll trigger to animate the movement of these leaves based on the scroll these kinds of
01:11:31.600 animations add polish and elevate the user experience especially on hero
01:11:37.040 sections where the first impressions matter the most so I'll go ahead and
01:11:42.719 commit this right now by saying get add dot getit commit-m
01:11:48.400 implement the first part of the hero section
01:11:53.600 and get push so that our members on jsmastery.com can follow along without
01:11:59.360 any issues with that in mind in the next lesson let's focus on what matters and
01:12:05.280 that is animating the actual video on scroll
01:12:10.000 No text
01:12:11.360 let's focus on the most important part of this course and that is adding the drink animation effect which is actually
01:12:18.719 just a video that is playing frame by frame as the user scrolls through the page so in this lesson I will demystify
01:12:27.040 these complex animations and show you that oftentimes they're basically just very smart ways of using videos or
01:12:34.960 images and then the final effect ends up looking something like this so let's go
01:12:40.560 ahead and make it happen back within our hero page we want to render a full
01:12:45.679 screen video it'll be muted and in line so it behaves well on all browsers and
01:12:51.600 devices so I'll head below the section that has a class name of noisy that is
01:12:58.560 this one right here if I click it notice how WebStorm automatically selects it
01:13:03.600 right here at the bottom and then just below it I'll render a div that'll have
01:13:09.440 a class name equal to video absolute which means that we don't want it to
01:13:15.199 interact with other elements on the screen and an inset of zero now this
01:13:20.800 video class name if you search for it you'll see that we have actually declared it within our index.css
01:13:28.159 where we apply a full width we change the height on medium devices and we just
01:13:33.679 apply some additional properties such as object bottom and object cover in order to render that video well next right
01:13:40.159 within this div I'll render the self-closing video element with a source
01:13:46.159 equal to slash videos/input.mpp4
01:13:52.080 why input mp4 well because if you head over to public videos you'll see that
01:13:57.280 this is the video that we have i'll also make it muted so we don't play any sound you rarely want to play sounds in your
01:14:04.560 web applications sometimes there's good opportunities to do that but in most cases just leave them on mute i'll also
01:14:10.960 say plays in line so we don't actually show an additional uh video like element
01:14:16.719 uh like the track bar where you can move through the video or increase or decrease the volume we want to hide all
01:14:23.120 of that and I'll say preload to auto because we want it to load automatically
01:14:28.159 as the user opens up the page and of course we want to be able to work with
01:14:33.199 this video we want to do something to it so we have to attach a reference to it
01:14:38.480 which I'll call a video ref then right at the top of our hero page I'll say
01:14:45.920 const video ref is equal to use ref
01:14:52.239 coming from react and while we're here I also want to figure out if we're on a mobile device so say const is mobile and
01:15:00.159 I'll make that equal to use media query which is this react responsive package
01:15:05.280 we installed before and I want to give it a max width of about
01:15:12.159 let's do 767 pixels so if it's up to that then it's
01:15:17.520 going to be mobile else it's going to be web now we can head below the use gub
01:15:23.120 hook that we have already created specifically below the gub timeline where we have animated the right and
01:15:30.000 left leaves and we want to figure out where the animation will start and end
01:15:36.400 so for example we can say something like const start value and then we can say that it'll start at center 60%
01:15:46.159 and we can also say the end value will be equal to something like bottom top
01:15:52.880 now these values will be different for mobile devices because there is less space so right here before assigning
01:15:59.760 value I'll first check whether is mobile is true and if it is I'll give it a
01:16:05.199 different value such as top 50 and same thing for the other one i will say if is
01:16:12.719 mobile in that case I'll say 120% and then top right here for the second
01:16:18.320 property so what do these values mean well top 50 means that when the top of
01:16:24.159 the video always remember that right the first property is referring to the
01:16:29.679 element we're animating so when the top of the video reaches and then this is
01:16:35.280 talking about the screen okay so when the top of the video reaches 50% down the screen the animation starts
01:16:42.719 similarly when the center of the video reaches 60% down the screen the animation starts that is on desktop in
01:16:50.719 this case we have the percentage at the start so this means that when the top of the video goes 120% past the top of the
01:16:58.320 screen meaning far off the screen we end the animation and bottom top means that
01:17:04.560 when the bottom of the video reaches the top of the screen then the animation ends we dive much deeper into these
01:17:10.719 values within our GSAP course but I think this is going to be good enough for now and now that we know the start
01:17:16.480 and the end values we want to animate the video you know how at the start I mentioned Juny which is the smart coding
01:17:23.600 agent that makes you a more efficient developer well I want to put it to the test right now so you can download it
01:17:29.520 and follow along with me the link is down in the description i'll press command shiftp and then search for Juny
01:17:36.080 which will open it right here on the right side and remember how at the start of the video I said that it's going to be very hard for AI to replicate some of
01:17:44.159 these beautiful animations well that is entirely true if you don't know how to approach them but as I said this entire
01:17:51.120 animation is nothing more than animating a video on mouse scroll so if you know
01:17:58.080 that then you know that it's not some kind of magic you have demystified it and therefore you're able to turn it
01:18:04.880 into something that you can easily develop and if you know how to approach it then AI can also do it for you so
01:18:12.800 let's try to write a task for Juny to do it for us i'll say create a GSAP
01:18:18.159 timeline that animates the video as the user scrolls through the page and I
01:18:25.760 think this is good i mean this is a very limited prompt it contains half a sentence but let's see what Juny can do
01:18:32.239 with that limited info it'll say sending LLM request so first it created a plan
01:18:37.760 and I want to go over that plan with you it says check if scroll trigger is properly imported create a gap timeline
01:18:44.800 that animates the video based on scroll use the video ref use the start and end values add appropriate animation
01:18:51.440 properties ensure that the animation works on both mobile and desktop add a
01:18:56.719 check and it's doing all of that in real time as you can see right here it's actually animating things and testing
01:19:03.600 whether it works so we can see the changes right here in real time the animation code has been updated to use a
01:19:10.000 new video timeline reference ensuring proper handling of video loading and playback the video now plays when in
01:19:16.320 view and the animation is updated based on the duration successfully updated
01:19:22.239 ready to play whenever the user scrolls and that's it a GUP timeline has been
01:19:27.520 successfully created to animate a video as the user scrolls through the page utilizing the video ref for targeting
01:19:33.840 and responsive behavior with the start value and end value the implementation is error-free and all tests pass
01:19:40.480 ensuring a seamless video experience well we'll see about that but the actual code is here so now let's see whether it
01:19:46.640 works if I head back and reload you can see that the animation starts automatically it actually slows down a
01:19:52.640 bit and that's it and then it replays also if I scroll down you can also
01:19:57.760 notice how the glass is getting smaller and it's actually working incredibly well but it looks like it wasn't precise
01:20:05.360 enough we wanted a parallax effect where we control the entire video flow i'm going to teach you how we can do that
01:20:11.840 but hey this might even be better this doesn't require a user to scroll rather
01:20:16.960 they can just take a look at this amazing animation right here still we want to tweak it just a tiny bit and
01:20:22.560 allow this glass to flow onto the second section and then end the animation there solely based on scroll not on autoplay
01:20:30.480 so Juny did an amazing job right here but now from scratch we'll go over it together and I'll show you how we can
01:20:37.040 make this animation work for our specific use case in this case we won't be triggering the hero section rather
01:20:43.520 we'll be triggering the video the start and end values are corresponding to the
01:20:48.560 start and end values we have created right here and then scrub is turned on which means that it'll make the video
01:20:54.560 play on scroll we also want to allow something called a pin to be set to true
01:21:00.400 this will keep the video stuck on the screen while you scroll so as you scroll the video doesn't move it'll stay in
01:21:06.800 place next instead of using these methods directly on the timeline or
01:21:12.000 calling the dot from two I will just remove all of these and also remove this
01:21:17.440 update animation when the video metadata is loaded instead I'll just say ref.curren.onloaded
01:21:26.480 metadata i'll create a callback function and I'll have to properly end this part right here and within it I'll say video
01:21:34.880 timeline referee ref.curren and we want to change the current time
01:21:42.159 of the video to be equal to video ref.curren
01:21:48.080 duration so this way we're updating the current time based on the video duration
01:21:53.600 and alongside this I also want to head over to the video and turn off the autoplay that we had here we also don't
01:22:00.560 need the loop because we're going to move it with the animation up and down so now if you head back over to your app
01:22:06.639 it won't play by default but as you start scrolling you'll notice that the glass moves down but wait this is
01:22:14.080 looking worse than what Juny did initially oh I think I know why that is here we have to actually create a new
01:22:20.159 variable for the timeline not refer to the timeline ref so I'll say const TL as
01:22:26.239 in timeline and then we'll use that TL right here when you say video timeline ref just TL.2 this will actually tie the
01:22:34.239 current time with the duration so if you get back right now and reload the page and start scrolling you'll see that the
01:22:40.880 animation is being applied on scroll perfect now if we compare this with what Juny initially did well to be honest I
01:22:48.639 cannot really tell which one is better this one actually plays it both on
01:22:53.760 scroll but then it also continues the animation later on so once we actually finalize the second section I think
01:23:00.560 Juny's might actually be better so Juny has passed the taste but just to stick with our design I'm going to bring us
01:23:06.639 back to our final solution now you can notice that on my end the animation feels very smooth on your end it might
01:23:13.440 feel a bit choppy something like this and if you use your mouse to scroll then
01:23:19.600 it depends on how your mouse wheel is actually sending the signals to your computer if I use the touch bar on my
01:23:25.440 MacBook it is very smooth but with the mouse scroll it is a bit less smooth so that is the difference but again why
01:23:32.080 should we make it feel like it skipping frames this is actually happening because most videos only have a key
01:23:38.320 frame every few seconds but for scrub-based animations we need every
01:23:43.600 single frame to be a key frame and we can fix that using a free open-source
01:23:49.360 command line tool for processing video and audio files called ffmpeg so just
01:23:55.199 head over to their website and download it once you download and install it we just have to run one single command and
01:24:02.320 I'll actually link it somewhere below this lesson or within the video kit so you can just copy and paste it or feel
01:24:09.840 free to type it out by hand and if you're new to this don't worry you don't have to learn this at all we just need
01:24:15.920 one single command you don't have to know how to use this software now first of all you'll have to run this command
01:24:21.600 within where our video is contained so we'll have to cd into public and then
01:24:26.960 once again cd into videos once you're there you can copy it and run it in my
01:24:33.120 case it says that the output file already exists and asks me do I want to override i'll say no and you can say the
01:24:39.840 same thing that's because I already provided this new output file for you which has a one frame attached to every
01:24:47.199 single key frame so it makes the animation smoother so now we can head back over to our hero page scroll down
01:24:54.719 to where we have the video and instead of displaying video's input I'll display
01:24:59.840 the output.mpp4 so if you reload and try to test it
01:25:05.040 it'll be a bit smoother even with your mouse but if you have a touch bar or on phones it'll feel even smoother which
01:25:13.120 means that the video is now fully optimized for the scroll trigger playback now why are we scrolling this
01:25:19.280 glass into an abyss of nothingness that's not what we want our user to see
01:25:24.400 instead we want to scroll it into the pricing of other cocktails that we offer which is this section right here so
01:25:31.120 let's head back over into our homepage that is our app right here and delete
01:25:36.880 this div which for now just helped us to scroll but now in the next lesson I'll
01:25:42.159 show you how we can add the cocktail section so just remove this div let's also commit it to GitHub first you'll
01:25:48.400 have to cd two times to get back to where our project is then type get add
01:25:54.239 dot to stage all the changes and get commit-m implement hero scroll animation and then
01:26:03.920 get push to push it over to GitHub to get started with our cocktail section
01:26:08.000 No text
01:26:11.440 let's head over into our components folder and create a new file called cocktails.jsx
01:26:18.639 run rafce to quickly spin it up and then let's import it right below our hero
01:26:24.320 within our app.jsx so that is cocktails perfect this is how
01:26:29.840 our current animation looks like on mobile we'll definitely improve it as we go especially this extra light scroll
01:26:36.639 bar which we don't really need right here at the top but for now let's focus on the cocktail section so just scroll
01:26:42.639 down head over into it and let's start implementing it by turning this div into a section and giving it an ID that we
01:26:50.719 can scroll to so we'll say cocktails and a class name of noisy as well
01:26:57.280 because we want to match it with the top section next right within it let's also render
01:27:03.679 an image with a source equal to slash images slashcocktail
01:27:11.199 left.png with an al tag of left leaf and an ID of
01:27:19.600 C as in cocktails left leaf that'll look something like this then just below it I
01:27:26.320 want to duplicate it and create one for the right leaf i'll call it R leaf and C
01:27:34.560 right leaf as you do that you won't see any changes there's still going to be only the two leaves that we implemented
01:27:41.040 before but none on the cocktail section that's because we haven't yet properly animated them and put them where they
01:27:47.360 need to be on the screen but for now let's focus on the list of the cocktails so I'll head below this image and render
01:27:54.239 a div with a class name equal to list and within it I'll render another div
01:28:01.679 with a class name equal to popular within it I'll render an H2 that'll say
01:28:07.440 most popular cocktails and then below it I'll render the UL
01:28:14.000 where we can map over those cocktails so within this UL map over cocktail lists
01:28:21.040 do map and this cocktail list is coming from our constants where we have all the
01:28:26.639 most popular drinks so I'll map over each drink and for each one I will
01:28:32.239 automatically return an LI which is a list item with a key of drink.name and
01:28:39.360 then within it I'll render a div with a class name on median devices margin e
01:28:47.760 which is inline end of 28 when you want to position something in the ends of the screen I found this property to position
01:28:54.800 it very well then we want to render an H3 that will render the dynamic drink
01:29:00.639 name and a P tag which will render the drink
01:29:05.920 country so where is it from and drinkdetail so some more details about
01:29:12.159 the drink finally below the div I'll render a span with a dash or a line and
01:29:19.360 then I can render the price i'm noticing that we're mentioning drink one too many times so we can just dstructure
01:29:25.920 everything from the drink such as the name country detail and price and now
01:29:32.480 you don't have to mention it multiple times you can just say what you want to get from it if you do that and save
01:29:39.840 you'll see that now it looks something like this for example we have Chappelle Hill Shiraas which is about 10 bucks not
01:29:47.199 sure what this one is oh it's a bottle okay but even though it's a bottle it's still very expensive for that kind of
01:29:52.639 money maybe it would be better to just head over to jsmastery.com and get yourself a monthly subscription instead
01:29:58.400 of spending money on cocktails but hey to each their own and here I will end this div of popular but what we can do
01:30:04.719 now is just duplicate this entire div and for this one I'll call it loved and
01:30:10.800 I'll say most loved mocktails are like cocktails but without any alcohol in them so basically like sodas and I'll
01:30:18.080 map over the mock tails list i'll also extract all of the properties and I'll
01:30:24.800 always make it just me28 no need to do it only on medium devices and now you're
01:30:29.840 going to end up with something that looks like this now of course this looks so much better on larger devices so if I
01:30:35.360 head over to tablet you can see that now we can actually see the menus appearing on top left and top right of the end of
01:30:41.600 the animation and the leaves are right here at the bottom left and bottom right but they're not being rendered properly
01:30:48.239 that's because I misspelled the cocktail right here so if I spell it properly you
01:30:53.760 should be able to see two huge leaves appear at the bottom left and bottom right but as we applied a little
01:30:59.920 animation to those two so that they appear like a parallax moving up and down we can also apply a little
01:31:06.320 animation to those two at the bottom so let's actually do that to recap our understanding of GAP see in React or
01:31:14.239 Nex.js applications you can use Gap through the helper libraries for example
01:31:20.080 a library that exposes a use gap hook called at Gap React still you also need
01:31:28.000 to import the original GSA library from Gap but the Gab hook makes it easier to
01:31:34.000 use so you just say use Gap you declare a callback function and you close it
01:31:40.159 right here within it you can start defining your timeline which you can then move up and down so say const
01:31:46.800 parallax timeline is equal to gap timeline
01:31:52.800 where you can define the type of trigger for that application in this case I'll say it's a scroll
01:31:58.800 trigger where we will trigger the cocktails section so here we want to say
01:32:06.080 that we want to start once the top of the section reaches about 30% of the viewport or of
01:32:14.400 the screen similarly we want to end the animation when the bottom of the
01:32:19.840 cocktails screen or hash cocktails reaches about 80% down the screen and we
01:32:27.920 can turn on the scrub to be true which means that we want to animate it on scroll the timeline just defines when
01:32:34.080 the animation will happen but we haven't yet said what will happen with those leaves and by the way if you're
01:32:39.199 wondering how I came up with 30 or 80 or top or bottom it was just a bit of trial
01:32:45.040 and error you have to play around with it and see what works so now that we have this timeline I'll say parallax
01:32:51.600 timeline from so we move it from what specific class name from C left leaf
01:33:01.199 and we want to give it X is min - 100 and Y is 100 so we move it to the left
01:33:08.719 on the X-axis and 100 pixels up on the Y- axis and we also want to apply
01:33:14.639 another dot from this time for the C right leaf and X is going to be 100 and
01:33:21.920 Y will be 100 so they're going to move in the opposite directions basically we're targeting those IDs that we have
01:33:28.800 given them right here so now if you scroll down and if you scroll very slowly notice how this one on the left
01:33:34.960 comes up first and then the one on the right also comes up so it's like you're
01:33:40.320 moving your cocktail into a jungle and that's it for this parallax scroll on the leaves these subtle movements like
01:33:46.560 this make the page feel more alive without it being too distracting so
01:33:51.600 let's check it out one more time on desktop we can see all of the nice animations particularly the one where we
01:33:58.480 animate each letter of the word mojito and then as we scroll down the ice falls
01:34:04.320 into the glass and we can see more cocktails that we can order and then the bottom leaves appear greeting us into
01:34:10.800 the jungle so amazing job on finalizing two super exciting sections of the
01:34:16.080 cocktails website let's not forget to commit it so I'll head over here and say
01:34:21.440 get add dot get commit-m implement cocktails section
01:34:30.560 and push it and if you want to quickly deploy it head over to verscell.com and
01:34:36.400 add a new project you'll see that Gab Cocktails has had some changes so you
01:34:42.320 can just click import it'll automatically recognize that it is a new V project or whatever other framework or
01:34:49.360 library you used you can also choose your project name right here and you can just click deploy now it'll take a
01:34:56.000 couple of minutes for the project to be deployed and then you'll be able to check it on the internet and share it
01:35:01.440 with your friends or put it on your portfolio check out these animations on top you were able to see some light if
01:35:07.840 you were fast enough to spot it and it looks like our project got successfully deployed so click on it right here in my
01:35:16.320 case it's live on this URL for you it's going to be something different but what matters most is that now we can copy
01:35:22.639 that URL and share it with your friends and potential employers or just put it in your portfolio okay so now that we're
01:35:29.199 here let's see if it still works exactly like it did locally if I scroll down the
01:35:34.719 ice still falls into the glass and we can see the prices and we are in the jungle this works great on mobile it
01:35:42.400 looks like this the text is still fully readable you can quickly scroll to it by clicking here and we do have some extra
01:35:48.880 space right here but as soon as you start scrolling that space is filled with these leaves and then we can see
01:35:54.960 the cocktails of course applying GSEP animations to screens of different sizes
01:36:00.960 such as mobile or tablets is a whole other game because we have to know exactly how to apply a specific
01:36:06.880 animation so that it works on that specific device and of course that's covered in a lot of depth within the
01:36:13.280 ultimate GSAP course let's get started working on the about
01:36:15.000 No text
01:36:20.000 section of our cocktails page in this one we'll have a little title right here
01:36:25.280 saying that we pay attention to every detail and then say a bit more about how we serve our cocktails and who do we
01:36:31.920 serve them to as well as show some nice graphics of people having fun in our bar
01:36:37.199 and of course this will come with a great animation so first the title will animate and then after the title we'll
01:36:43.520 get all of the images one after another so we can get started working on it by
01:36:48.719 creating a new component within the components folder which I'll call about.jsx
01:36:55.840 and I'll runce to quickly spin it up we can immediately import that right within
01:37:01.600 our app below the cocktails so I'll say about and end it right here and as soon
01:37:08.480 as you do that we now have this new section right here below the drink so let's develop its UI by giving this div
01:37:14.880 an id of about so we can scroll to it and within it we can create a new div
01:37:20.639 with a class name equal to margin bottom of 16 on medium devices padding x of0
01:37:28.159 and usually padding x of 5 then we can render another div right within it with
01:37:34.719 a class name equal to content and then within the content we can render another
01:37:40.880 div with a class name equal to on medium devices call span of 8 so we can prepare
01:37:49.119 some space for this heading text that will show right here and then we can render a p tag that'll have a class name
01:37:56.639 equal to badge and it'll say best cocktails and below it we'll render an
01:38:02.960 H2 that'll say where every detail matters and then we can also render a
01:38:09.840 span element that'll just render one dash with a class name of text-white
01:38:16.560 then let's actually space this out nicely so after the dash still within the h2 we can say from muddle to garnish
01:38:24.560 which is just some cocktail jargon saying that we'll prepare everything now we can go below this div and we can
01:38:31.040 create one more div just below it with a class name equal to sub content but I
01:38:38.560 can already see that something is wrong here and that is that our cocktail drink video is actually moving down oh no
01:38:45.360 never mind now it's good so let me just reload and as I scroll now it should kind of get stuck right here and then we
01:38:51.440 should have a clean section which allows us to focus on the subcontent so within
01:38:56.639 it I'll create a P tag and here we want to display some text now the simplest way for me to get that text is right
01:39:03.040 here from the design so I will copy this part where we say that every cocktail we
01:39:08.239 serve is a reflection of our obsession with detail then right below this P tag
01:39:14.000 we can render a div and within that div we'll have another P tag with a class name equal to on medium devices text-3
01:39:23.199 XL to make it very large text- Excel typically and font-bold
01:39:30.159 within it I'll display a span element of 4.5 and then outside of it out of five and
01:39:37.520 then below this P tag I'll render another smaller text so I'll give it a class name equal to text-sm
01:39:44.960 text-white 100 and if we have done that properly we can enter a piece of text
01:39:51.040 that says more than and then we can type a specific number of customers perfect
01:39:56.560 now on our current website you should be able to see something that looks like this but of course let's focus on the
01:40:03.199 grid where we can display additional images so I'll head below a couple of divs actually 1 2 3 4 so we're going to
01:40:13.040 exit this subcontent right here and then here we want to display another div
01:40:19.440 that'll have a class name equal to top grid
01:40:25.679 within it I'll display a div with a class name equal to on medium devices
01:40:32.239 call span 3 with a div that'll have a class name of noisy and it'll be
01:40:41.360 self-closing and then we can render an image that'll have a source of images
01:40:48.080 abt so that's the about section.png PNG but make sure to say abt1 because we'll
01:40:53.760 have multiple with an al tag of grid img1
01:40:59.360 now if you save this you should be able to see this little image and if you remove the noisy class it'll be in full
01:41:06.159 clarity but we do want to have this special bar type feel now we can
01:41:11.280 duplicate this div a couple of times so I'll take this div duplicate it once and
01:41:17.360 one more time and I'll space them all out nicely within this parent div that
01:41:23.440 we have the top grid in the second one I want to say call span six so it'll be
01:41:31.040 taking more space and I'll render the about image two and then for the third one I'll say call span three about image
01:41:39.040 five and save it and now we can see three of these
01:41:44.159 different images now I'll create another div that'll have a class name equal to
01:41:50.639 bottom grid and within it I'll duplicate one of these divs that has the div and the image inside of it and I'll say call
01:41:57.920 span 8 so this one will be long it'll render the about image three and just
01:42:03.679 below it I'll duplicate it once again and I'll render another call span 4 with
01:42:10.880 the about image four why do we have 8 and 4 that's because the full width is
01:42:16.800 12 so in this case we have 3 63 which is 12 and here we have 8 and 4 and if we
01:42:24.000 save this on mobile we show all of them one after another but desktop is where
01:42:29.199 this truly shines so as we scroll down here you can see this new layout grid that we created but now is the time to
01:42:36.719 animate it so that everything fades in naturally when the user scrolls in view and at this point you should already
01:42:43.040 have a pretty good idea of how we can make it happen right at the top of this component I'll use the use gap hook by
01:42:50.639 saying use gap coming from gap react and I will just open up a new callback
01:42:56.000 function within it then we can start defining our different animations and timelines first I want to split the
01:43:02.000 title into words so I'll say const title split is equal to split text dotcreate
01:43:10.800 and we want to call it about h2 so basically here we're targeting the h2
01:43:16.639 element inside the about div and we want to split it by the type of words now
01:43:23.040 don't forget to import GSAP coming from GAP as well as import in
01:43:29.920 curly braces split text coming from GAP all we also need to create a timeline
01:43:35.840 that allow us to choose when we start with the animation so I'll say const scroll timeline is equal to gap.timeline
01:43:44.639 it'll be a scroll trigger animation and the trigger will be attached to the about element so to the entire section
01:43:52.239 and we'll start it when the top of the about section reaches the center of the screen and now we can start animating it
01:43:59.600 by saying scroll timeline dot from title split dot words and we want to give to
01:44:07.040 it some initial styles such as it'll start from the opacity of zero it'll
01:44:12.560 last for 1 second it'll start from the top so y% will be 100 we can choose the
01:44:18.960 easing of the animation so we'll use the expo out and we can choose the stagger
01:44:24.239 between each different words of 0.02 so that the animation is pretty fast to
01:44:29.520 this I'll also attach another dot from this one will be concerning the top grid
01:44:36.480 div as well as a bottom grid div so
01:44:41.840 we're targeting both the top and bottom row separately to both of them I'll give the opacity of
01:44:49.360 zero duration of one ease of power one
01:44:55.679 and out and a stagger of 0.04 i found this value to work the best and then you
01:45:03.360 can also apply a second parameter to this from which is a string of minus equal to 0.5
01:45:10.800 what this will do is it'll make the animation start half a second before the
01:45:15.840 previous one ends so both animations will overlap a bit which feels smoother
01:45:21.199 and faster so now if we save it and if you reload notice how each word falls
01:45:27.600 into place one after another very quickly and then immediately while that is happening we can also see the top and
01:45:34.320 the bottom row kind of start coming up together it is very subtle very quick
01:45:40.639 and seamless no flashy animations and at this point I think you have a pretty
01:45:45.679 good idea of how we're applying all of these animations so with that in mind let's not forget to commit it by saying
01:45:53.360 get add dot getit commit-m implement
01:45:59.440 the about section and get push to push it over to GitHub so that in the next
01:46:05.520 section we can focus on this amazing pretty different art section this is
01:46:11.520 going to be all about how we're creating those cocktails and we'll actually lead the user through the story of the
01:46:17.679 creation through an image overlay so as they scroll they'll be able to see the full story more on that in the next
01:46:24.480 lesson let's dive into the art section of this
01:46:25.000 No text
01:46:29.760 course it's pretty exciting to be honest because it's one of the sections that is different from the other ones to this
01:46:35.840 one we just applied a timeline and show the elements one after another in a specific time frame but for this one
01:46:42.400 we'll actually unlock the entire section that is behind it using something known
01:46:48.320 as a mask so if you check out the final version it'll look something like this we go to the section that we have
01:46:54.080 developed just before and then as you start scrolling you can see the art section and you think that's it right
01:47:00.400 but then as you continue scrolling down you'll notice that a mask of this image appears and it seems like you're
01:47:07.280 entering into the world of this barman creating the cocktail just for you so
01:47:13.199 let's build it i'll create a new component right within the components folder and I'll call it art.jsx
01:47:21.440 within there you know the drill i'll runce to quickly spin it up and then
01:47:26.960 I'll import it over within our app that's going to be art just like this
01:47:33.440 and then we can enter into it and start creating it so first things first we have to give this div an ID equal to art
01:47:40.560 so we can scroll through this section later on through our navbar and then within it let's render a div with a
01:47:47.199 class name equal to container margin x of auto so we center it
01:47:52.639 horizontally height of full and a padding top of 20
01:47:58.800 within it we can display an h2 that'll say the art and we can give it a class
01:48:05.520 name equal to will fade now if we reload our application and scroll down you can
01:48:12.800 see just the art headline right in the middle but now below it let's render
01:48:17.920 some more content so I'll render a div that has a class name equal to content
01:48:25.119 and within it it'll have a ul an unordered list with a class name equal
01:48:31.199 to space-y-4 to create some spacing and will fade as
01:48:36.719 well and within it we can map over good lists.m map where we get different kinds
01:48:43.679 of features as well as the index for each one of these features let me show you what those are these are coming from
01:48:50.480 our constants and we're talking about a list of some features that we offer for example handpicked ingredients signature
01:48:57.199 techniques bartending artistry and freshly modeled flavors so for each one
01:49:02.800 of these we'll render an LI a list item that has a key equal to the index as
01:49:09.280 well as a class name equal to flex items-c center and a gap of two and for
01:49:16.080 each one of these we'll render an image that'll have a source of images
01:49:22.080 check.png with an al tag of check and then we can
01:49:27.440 render a p tag that'll render the actual feature so now we can see those four
01:49:32.880 right here in the middle of the screen but now let's render the main star of the show which is the cocktail image so
01:49:39.440 I'll head below this ul still within the content part and I'll render another div
01:49:45.199 that'll have a class name equal to cocktail dash img and within it I'll
01:49:52.239 display an image that'll have a source of forward slash images
01:49:58.719 slashunder img.jpeg JPEG an all tag of cocktail
01:50:04.800 and a class name of ABS center so absolute center masked img
01:50:12.560 size dash full and object- contain so if we save it you can see this little image
01:50:19.280 appear right here but actually what's happening if you take a look at the masked image class name that we're
01:50:25.600 applying to it you'll see that this is actually taking that image and then
01:50:31.119 positioning it nicely in the center and applying a mask so basically we're applying a mask image and let me show
01:50:38.239 you how that one looks like it is within public images and then we can search for
01:50:43.840 mask image and you can see that it is just a single regular drink but then we
01:50:50.080 also have the regular image the one that we used which is the under image so let me show you how the under image looks
01:50:56.320 like it's this one the whole image but did you know that natively in CSS you can
01:51:02.239 take one image and then choose another image such as this one to be the mask
01:51:07.520 and if you do that properly if you say mask image then it'll take the shape of
01:51:12.800 that other image pretty cool right now we can head below this div and create
01:51:18.000 another ul this one will actually be exactly the same as this ul so I'll just
01:51:23.199 copy it and paste it right here space y4 but instead of good lists we'll map over
01:51:29.040 the feature list map over it give it item center but I'll also give it
01:51:35.199 justify start and a gap of two and to this P tag I'll
01:51:40.639 also give a class name equal to on medium devices W fit and typically W60
01:51:48.000 so now on mobile they look exactly the same but if you expand it you'll be able to see it on the right side and now
01:51:54.800 let's also render the text below it so I'll head below this UL and below one
01:52:00.000 more div and I'll render a div with a class name equal to masked content or
01:52:08.239 container with an H2 that has a class name equal to will fade we'll target
01:52:14.639 these later on using GAP to fade them and I'll say SIP worthy
01:52:21.599 perfection below this H2 I'll render a div that'll have an ID equal to masked
01:52:27.920 content beneath it I'll render an H3 and here we
01:52:33.119 can just copy from the design made with craft poured with passion so I'll just paste that in this H3 right here and I
01:52:40.560 also want to copy this text right here for the P tag right below the H3 this isn't just a
01:52:47.840 drink it's a carefully crafted moment made just for you so you're turning
01:52:53.199 everything into an experience so now if you head back I mean you can see this but you cannot see the H3 and the P tag
01:53:01.119 because they have an ID of mass content so we'll only show them as the user scrolls through the site so now let's
01:53:08.400 bring this entire section to life as the user scrolls we'll pin the section fade
01:53:14.639 out the initial content scale and reveal the image mask and
01:53:20.560 finally fade in the closing message at the bottom all of this will be linked
01:53:26.960 only to one thing and that is the scroll of your mouse wheel so let's animate it
01:53:32.400 right here at the top of this section by first figuring out if we're on mobile or
01:53:37.520 not because based on our width we might need to position our elements a bit differently for that I'll use the use
01:53:43.840 media query and set the max width to
01:53:49.360 about 767 pixels same as before if it's below that we're going to consider it a
01:53:55.920 mobile device then we can use the use GAB hook and right within it we can
01:54:01.840 define the start value of our animation so I'll say start is equal to if we're
01:54:07.440 in mobile we're going to start it when the top of the component reaches the 20%
01:54:13.360 of the viewport else we're going to start it on top top so as soon as we
01:54:18.719 reach it once again this required for me to play with it a bit to figure out the best values so now that I know we can
01:54:24.960 just type them here and now we want to focus on the timeline itself so I'll say const mask timeline is equal to gap
01:54:34.560 which we have to import at the top so right here say import gap from gap and
01:54:43.280 then you can say gap.timeline and we can craft a new timeline based on
01:54:49.599 the scroll trigger where we will trigger the entire art section we'll start the
01:54:56.960 animation once we reach the start point that we declared above and we'll end it once the bottom of the section reaches
01:55:03.920 the center of the screen i'll apply a scrub animation right here and I'll set
01:55:09.679 the scrub to 1.5 which will be smooth scroll control which means that the
01:55:15.440 animation progress will follow the scroll but with some delay and I'll also
01:55:20.880 say pin and set it to true this will keep the art section fixed in place
01:55:26.800 while scrolling through the animation that is very very important so just say
01:55:32.239 pin right here so now that we have defined the timeline we actually have to declare the animations so still within
01:55:39.199 the use gub hook I'll say mask timeline dot2
01:55:44.960 dot will fade and we want to change them to opacity of zero stagger in between
01:55:51.920 the elements of 0.2 two and we can use an ease of power one inout this is one
01:55:58.239 of the most commonly used ones so this is for the will fade elements so if I head back and reload as we scroll you
01:56:05.679 can see that all the elements will fade and then as you scroll up they'll reappear so now that we have this two
01:56:13.280 for the fading elements we can also apply a dot two for the masked image
01:56:21.119 where we'll change the scale to 1.3 to make it bigger i'll change the mask
01:56:27.360 position to be center i'll give it a mask size of 400% to make it bigger
01:56:36.080 duration of 1 second and I'll leave the same ease of power one dot in out
01:56:43.840 so now if I save this and reload and scroll down you can now see that the
01:56:49.360 mask actually widens throughout the duration of 1 second and shows our barman and finally we'll also want to
01:56:57.119 show the mask content so I'll say two dot hash masked content that'll have the
01:57:04.480 opacity of one duration of one and an ease of power one and out so now as you
01:57:12.480 continue scrolling to the end you'll be able to see this new H2 and a P tag appear at the bottom finalizing the
01:57:19.199 section pretty cool right and this opens up so many possibilities of having one image being hidden behind the mask of
01:57:26.960 another and then it expands and it invites the user in this is such a powerful and effective section and in
01:57:34.560 mobile it'll look something like this where it still makes a lot of sense sure we could go ahead and reposition some
01:57:40.880 elements to appear a bit better but even this right here is pretty amazing so let's go ahead and commit it by saying
01:57:48.320 get add dot getit commit-m implement
01:57:54.000 the art section and then get push
01:57:59.119 allowing us to focus on our menu section next but so far great job on implementing this masked scroll this has
01:58:07.119 been great and I'm super excited to finish it off with this one
01:58:10.000 No text
01:58:12.320 let's get started with our menu section where in the middle of the screen we'll have a drink that we show so that people
01:58:19.280 get a visual representation of what they want to order and also let's be honest these drinks are looking pretty cool so
01:58:25.920 once they see it they're more likely to order it then we mention the title of this recipe as well as some more info
01:58:32.880 about it and we have left and right arrows that allow us to animate this drink in place let me show you what I
01:58:39.119 mean on the finished website you can now click to swap between these different
01:58:44.320 drinks see more information about them and you can also use the right and left
01:58:49.440 arrows to move between different drinks and you can see how it nicely animates or slides in from left to right so back
01:58:57.280 within the code let's create a new component within the components folder and let's call it menu.jsx JSX where you
01:59:06.400 can run rafce to quickly spin it up then as usual let's just import it within our
01:59:13.679 app file where I'll simply say menu and make sure that it comes from components
01:59:20.159 menu then we can head over into the menu and we can turn it into a section with
01:59:26.400 an ID of menu so we can scroll to it from the navbar i'll also add an area
01:59:32.960 label by and set it to menu heading so that the users know that they can swap
01:59:39.040 between different sections within this menu once again I'll display some leaves so I will have an image with a source of
01:59:46.239 forward slash images/lider leftleaf.png
01:59:52.239 with an al tag of left leaf as well as an ID of M as in menu left and I'll
01:59:59.920 duplicate it below and change all the dimensions of left to right so I'll say
02:00:05.360 right leaf right leaf right here and finally m right leaf
02:00:12.159 perfect and below those two leaves images I'll display an H2 that'll have
02:00:18.239 an ID of menu heading with a class name of SR only what this will do is apply
02:00:26.080 this class name where we are resetting the positioning of this heading so that we can play with the animations later on
02:00:33.280 and I'll simply make it say cocktail menu now if we head back over to
02:00:39.440 localhost 5173 and scroll down below the art section you can see that we have the
02:00:46.000 left and top right leaves and in the middle we'll later on animate the title of the menu but for now we can focus on
02:00:52.719 the menu itself so below the H2 let's create a new nav element that'll have a
02:00:59.199 class name equal to cocktail dash tabs with an area label of cocktail
02:01:06.880 navigation and within it we can map over the cocktails saved in the constants folder so if you head over into
02:01:14.000 constants indexjs and you search for cocktails I believe it's these four
02:01:21.040 which we can call slider lists or you can just rename it to something like all
02:01:26.719 cocktails whatever you decide to use make sure to also change it right here at the bottom
02:01:33.280 so whether it's slider lists or all cocktails whatever it is just make sure to import it right here at the top from
02:01:40.080 constants and then map over them by saying map where we have each individual
02:01:45.599 cocktail as well as the index of that cocktail and for each one we can open up a new
02:01:51.440 function block not an immediate return because first I want to figure out which
02:01:56.719 one is active so I'll say const is active and it'll be active if the index
02:02:02.960 corresponds to the current index of the cocktail that we're on but where are we
02:02:08.800 going to get the current index well we can save it to the state so right at the
02:02:14.000 top I'll say use state snippet and I'll call it current index and set current
02:02:20.560 index at the start set to zero because we're in the first cocktail we immediately have to turn this into a
02:02:25.920 client rendered component so I'll apply a use client directive at the top because we're using a use state hook
02:02:32.560 which is coming from React and then based off of this active class we can show some different information so I
02:02:40.000 will always return a button and this button will have a key equal to
02:02:46.960 cocktail do ID it looks like I misspelled the cocktail right here and
02:02:52.400 it'll render the cocktail name so if we do this and scroll down
02:02:59.199 you can now see the names of four different cocktails that we're mapping over but let's style it a bit
02:03:04.880 differently so that we know which one is currently active so I'll give this button a class name and I'll make it
02:03:11.760 dynamic where we will check whether is active is currently true and if it is
02:03:18.239 I'll give it a text white and a border white and if it's not true I'll give it
02:03:25.040 a text white over 50 and border white over 50 if you want to you can also put
02:03:30.880 this into multiple lines just so it's a bit easier to understand what's happening perfect and now you can see
02:03:36.560 that the classic mojito is currently turned on whereas the other ones are not actively selected now we also have to
02:03:43.840 give this button an on click element which I'll do right here below the class name and within it we'll create a
02:03:50.159 callback function that'll call the go to slide function to which we have to pass
02:03:55.440 the index of the slide we want to go to so we can also create this function right at the top const go to slide
02:04:05.520 it'll accept the index and we can then figure out which index we're trying to
02:04:10.960 go to so const new index is equal to and now if we just let it to be index well
02:04:17.920 in that case we would go from zero to one to two to three and then we wouldn't
02:04:24.560 have any more cocktails because that's it we have four and if the next time the user clicks four well then it's going to
02:04:30.400 lead them to the fourth the fifth sixth and so on but we don't have that many so
02:04:35.599 in this case I'll show you a neat little JavaScript trick of using a modular operator so we can check whether the
02:04:43.199 index plus the total number of cocktails and we have to get the access to the
02:04:48.719 total number of cocktails by calling the all cocktails.length
02:04:54.639 so if the index that we're currently on plus the total cocktails is equally
02:04:59.840 divisible by total cocktails and it returns a number that is not zero well
02:05:05.040 then we simply set it to the index else we'll return it to zero so it'll restart once again once we reach the number that
02:05:11.840 is greater than four if that explanation wasn't clear we can refer to the MDN docs checking the remainder operator
02:05:18.719 which returns the leftover when one operand is divided by the second one so for example if you try to evenly divide
02:05:26.159 13 by 5 you're going to get three because we can only divide 13 by 5 two
02:05:31.679 times evenly which is 10 and then 13 - 10 is 3 so if we evenly divide by four
02:05:38.960 like this and then if our steps are zero and then
02:05:44.560 we go to the second slide which is 1 2
02:05:50.159 3 and then once we reach four it'll actually bring us back to zero and then
02:05:55.920 we restart from scratch 1 2 3 4 pretty cool right so we have essentially
02:06:02.400 created a slider that moves infinitely to the right but resets at four and if you want to learn more about the
02:06:08.960 reminder operator or any other operator within the JavaScript language well we cover it in much more depth within the
02:06:15.599 complete path to JavaScript mastery course but for now let's actually change the state so that it points to this new
02:06:22.400 index so I'll say set current index to be equal to new index perfect now if we
02:06:28.960 test it out you can see that you can choose a different cocktail with your mouse but we don't yet have the arrows
02:06:35.360 to switch between them so let's do that next right below the nav element I will
02:06:40.719 create a new div and give it a class name equal to content
02:06:46.880 within which I will then create a new div with a class name equal to arrows
02:06:53.679 then within it I'll create a new button and this button will have a class name
02:06:59.119 of text dash left so we align it and an on click it'll call the callback
02:07:06.000 function where it'll go to slide that is current index minus one and within it we
02:07:13.280 can simply render the previous cocktail name so for now I'll just say prev
02:07:19.119 cocktail name later on we'll have to figure out what that cocktail name is and then we can also render an image
02:07:26.800 with a source of forward slash images slash
02:07:32.079 right arrow.png with an al tag of right arrow and an
02:07:39.199 area hidden of true great so now we have this arrow right here and you can see
02:07:45.679 that it actually swaps between all these different cocktails and it never stops
02:07:52.000 that's because we use the modulo operator now we can repeat the same thing by duplicating this button just
02:07:58.079 below this one will render the next cocktail name so I'll say next cocktail name go
02:08:05.920 to slide current slide plus one instead of minus one and I'll use the left arrow
02:08:12.480 right here and call it left arrow so now we have those two different buttons that
02:08:18.639 allow us to switch between the cocktails left and right now let's go below this div that is containing these two buttons
02:08:25.760 and let's render another div which will render the cocktail that we're trying to show it'll have a class name of cocktail
02:08:33.840 and it'll render an image with a source of current cocktail
02:08:42.320 image with a class name equal to object dash contain but hey how do we know
02:08:49.599 which cocktail is the current one and which ones are previous and next ones
02:08:55.040 well let's figure that out right here at the top of our component I will say
02:09:00.800 const get cocktail at and then we have to get the index
02:09:08.159 offset is it going to be the first the second the third and so on and here we
02:09:13.520 can automatically return all cocktails where we get into the current index plus
02:09:21.520 the index offset plus the total cocktails and then we also use a modulo
02:09:27.679 operator by the total cocktails so at any point we know exactly which one is
02:09:33.599 the current one which one is the previous and which one is the next with that in mind we can extract those
02:09:39.360 variables by saying const current cocktail is equal to get cocktail add
02:09:45.360 zero so that's the current one next we can have the prev cocktail which is
02:09:52.400 going to be get cocktail add minus one and then we can have the next cocktail which is going to be get cocktail ad one
02:10:00.960 and now we can use this prev cocktail.name
02:10:06.639 to show which cocktail we're going to go if we click on the left arrow and here we can use the next cocktail.name to
02:10:13.840 know where we're going to go for the next one and here we can use the current cocktail image to show it so now if we
02:10:20.480 scroll down you'll be able to see that we have the coracal mojito and then we
02:10:26.480 have the raspberry mojito if we go right and we can also see the image of the current one now I want to show some more
02:10:32.719 information about the cocktail that we're currently on so just below this div that has a class name of cocktail
02:10:39.599 I'll display another div that'll have a class name equal to recipe this one will
02:10:47.440 have a div and it'll have a reference pointing to the content ref because we
02:10:53.599 want to animate this very soon so right at the top I will create a new reference that we can attach to that recipe part
02:11:01.040 of the cocktail menu so I'll say use ref imported and then say const content ref
02:11:09.199 is equal to use ref imported from react perfect this div will also have a class
02:11:15.920 name equal to info and within it a p tag saying recipe for below it another p tag
02:11:23.599 with an id of title that'll say current cocktail dot name and then below this
02:11:30.719 div we can render some more details so I'll render a div with a class name equal to details
02:11:38.079 where we will render the H2 that'll render the current cocktail
02:11:44.159 title and below it a p tag that'll render the current cocktail dot
02:11:50.159 description so if we save this you can see that now at the bottom we have this info that says that this is a recipe for
02:11:57.119 a classic mojito with simple ingredients made with tequila lime juice and orange
02:12:02.560 liquor so this is looking so much better right away let's also check it out on desktop to see it in its full glory
02:12:09.280 looks like the arrows are not positioned well so if you hit back looks like I
02:12:14.480 called it arrow but the class name needs to be arrows for it to get this flex item center and justify between styles
02:12:22.320 so if you change it you'll see that now it has a much nicer layout where we can
02:12:27.840 actually click on these cocktails and immediately get new information or we can just click on the arrow or the name
02:12:34.320 and immediately see the next one in line makes the choosing so simple i think I'd
02:12:39.599 go with this one right here but now when we switch between different cocktail
02:12:44.719 slides we want to show a beautiful transition of a cocktail sliding from the left side to the center and we also
02:12:51.599 want to animate the text as it's sliding in and here's a little pro tip i told you before that every single animation
02:12:58.079 has to make sense outside of just looking cool so in our case the first one is to make them really interested
02:13:04.800 into our bar where they can see all of the different drinks that we offer then
02:13:10.159 we have this section right here which brings them even closer to ordering a drink by getting the barman to come
02:13:16.400 towards them and offer it to them and then finally with the menu the goal is
02:13:21.599 to make them feel as the drink is already sliding across the table coming right toward them that's going to make
02:13:28.000 them super likely to order it this is called emotion-driven design and it's used in a lot of different websites
02:13:34.239 nowadays and it is particularly useful when it comes to animations because you don't want to implement the animation
02:13:40.079 just for the sake of adding it you want to add it to welcome the user to the jungle for example by moving these
02:13:46.560 leaves up and down you want to use them to make the users feel something so
02:13:51.760 let's add those animations first we'll animate this title then we will slide
02:13:56.800 the drink across the table right at the top of our component I'll use a use gab
02:14:02.560 hook and I'll create a callback function as before but this time I'll also
02:14:08.079 provide something within the dependency array and that's going to be the current
02:14:13.280 index why and what does this do well when you provide something a specific
02:14:19.679 variable within the use gub hook dependency array it'll rerun all of the
02:14:24.880 animations that are within it whenever this variable changes so whenever we change the slider from one cocktail to
02:14:31.760 another we want to rerun the animations for that other cocktail so let's start
02:14:37.280 with animating the title by first importing GAP right at the top by saying
02:14:43.360 import GAP from GSAP and then we can say gap dot from two we want to animate the
02:14:51.920 title from the opacity of zero
02:14:57.360 to the opacity of one throughout the duration of 1 second so now if you click
02:15:04.560 on one of these list items you can see that the title slowly animates but of
02:15:10.639 course let's focus on the drink now that's the main star of the show so I'll say gap from 2C
02:15:18.480 cocktail image we want to start from the opacity of zero and most importantly the x% from
02:15:27.679 minus 100 so that it's outside of the screen and then we want to change the X
02:15:33.440 percent to zero to bring it back to the middle of the screen with the opacity of
02:15:39.360 one throughout the duration of 1 second and ease of power one and out so if you
02:15:47.360 save this you can see that now the cocktails nicely slide in and even
02:15:53.440 though we cannot see the bottom of the text right here at least not on mobile devices it is all fully visible on
02:15:59.840 desktop so let's animate it as well by saying gap dot from two dotdetails
02:16:07.920 h2 from y% 100 and opacity of zero we want to bring
02:16:14.400 it to y% of zero and opacity of 100 with
02:16:19.520 the ease of power one in out and we can do the same thing for the p tag so we'll
02:16:26.079 duplicate this gap 2 and change it from details to
02:16:32.160 P tag perfect now if you move over to the second cocktail you can see that both the P tag and the H2 fly in from
02:16:39.599 below to above of course we want to check out how that looks like on desktop so as I click it you can see that it
02:16:46.558 looks even better it is super quick and just works so well oh and if you want to
02:16:53.760 as an extra assignment for this section you can also add a parallax effect to
02:16:59.040 these leaves right here on bottom left and top right so they move slightly up
02:17:04.718 and down similarly to what we have done in the last two times and with that in mind we're done with the menu section so
02:17:12.240 in the next one we can focus on the last section of this application which is the
02:17:17.440 footer section but it won't be a very simple boring footer section we can actually make it as part of our contact
02:17:24.080 page as well so we can say where our bar is located some contact information as
02:17:30.240 well as the opening hours and of course our socials so let's do this next
02:17:35.000 No text
02:17:37.599 and finally we are ready to dive right into our footer which is more than just a footer it is also a contact page so
02:17:45.599 back within our application head over into the components folder and create a new file and call it contact.jsx
02:17:54.400 within it runce and let's just import it within the
02:17:59.440 app.jsx by importing the contact section if you do that we can get started by creating
02:18:06.080 it right away i'll use a semantic HTML 5 footer tag and give it an ID of contact
02:18:12.959 so we can very easily scroll to it right within it I will display an image that
02:18:18.400 has a source equal to and once again we're dealing with some leaves so I'll
02:18:23.599 say images footer write leaf.png PNG
02:18:29.040 with an al tag of leaf right and I'll also render an ID of F right leaf which
02:18:37.920 we'll use to animate it very soon I'll duplicate it and change this over to a
02:18:43.599 left leaf in all three instances and right below it we can render a div with
02:18:50.080 a class name equal to content and within the content we can render an
02:18:56.400 H2 to that'll say where to find us now if you save this and scroll to the
02:19:03.120 bottom you can see the where to find us section now I'll collapse this just so
02:19:08.160 we can see it right here and it looks like the left leaf didn't render properly because I misspelled left so
02:19:14.558 let's fix it in all three places and now you can see both the left and the top
02:19:20.400 leaves now below this H2 let's render a div and within it let's say H3 visit our
02:19:29.920 store or here we can say bar then below it a P tag where we can render an
02:19:36.478 address i'll head back to the design so I can copy this random address in the US
02:19:43.120 below it we can render another div that'll say H3 of contact us
02:19:50.800 and then we can also paste the phone number which I will copy within a P tag
02:19:56.240 as well as the email address which will be right within another P tag finally
02:20:03.520 I'll render another div that'll have an H3 that says open every day and then below
02:20:12.479 it we can map over the opening hours map where we get each individual time
02:20:20.399 and for each of these times we can automatically return a P tag that'll have a key equal to time
02:20:29.200 and within it we can render the time doday colon and then time dot time so we
02:20:34.880 render both day and the time so if we head back now we can see visit our bar contact us and open everyday
02:20:42.560 we can head below this div and render one last div for our socials so I'll
02:20:49.439 render h3 and say socials and within it I will render another div
02:20:56.240 with a class name equal to flex- center and a gap of five and we will map over
02:21:03.920 the socials right here which are coming from the constants so make sure to import them and for each one of our
02:21:11.120 socials we will automatically return an anchor tag so we can actually visit it
02:21:18.479 that'll render the image with a source of social
02:21:23.840 so if I save it you can see three different icons and now we can style them a bit by giving it a key of
02:21:30.560 social.name name an href of social url
02:21:35.760 so we can point to it a target of underscore blank so it opens up in a new page and with it we have to provide a re
02:21:43.520 of no opener no referral just like this and finally an area label for screen
02:21:50.000 readers of social name so we know what we're clicking on so now you can see that we
02:21:57.120 have this footer section if I expand it just a bit you'll see that it looks even better we now have those two leaves on
02:22:03.920 the left and the right sides and of course we are ready to apply a couple of animations i'll collapse our code just a
02:22:10.880 bit just so we can see the entire part of the footer and I'll head right at the top of this contact section where I will
02:22:18.399 use the use gab hook and we will run it just at the start
02:22:24.000 within it we want to split this title into multiple words by using the split
02:22:29.680 text plugin so I'll say const title split is equal to split text which we
02:22:36.880 have to import at the top by saying import split text coming from gap all
02:22:43.359 and don't forget to import the gap library itself by saying import gap from
02:22:49.359 gap on the split text we can call split text.create create and we pass what we
02:22:55.200 want to split so that's the H2 within the contact section and we want to split it into a type of words now that we've
02:23:03.920 split it we can create a timeline and tie it to the scroll position so say timeline is equal to gap.timeline
02:23:12.880 based on the scroll trigger and the trigger will actually be once we reach the contact section so the start will be
02:23:20.000 once the top of the contact section reaches the center of the screen and we can also define the easing so that's
02:23:27.280 going to look like this ease of power one in out and that's our timeline so
02:23:34.160 now we can focus on actually animating different elements within that timeline
02:23:39.439 specifically we can focus on animating each word in the title right here so say
02:23:44.720 timeline dot from we want to take the title split
02:23:50.800 words and animate it from the opacity of zero
02:23:57.280 from the y% of 100 which is outside of the screen and with a stagger of 0.02 if
02:24:05.040 you apply this and reload nothing will happen yet that's because I said word right here instead of words so if you
02:24:11.840 fix it and reload you can see that it slowly starts coming up and down we'll see it better once we go to full screen
02:24:18.800 but for now let's focus on the other animations as well so I'll just chain
02:24:24.240 another dot from to this timeline this time focusing on the contact H3 as well
02:24:31.200 as the contact in the P tag and I'll do the same thing opacity zero Y% and
02:24:38.960 stagger and finally we want to animate the leaves so I'll say dot2 we want to
02:24:44.080 go to hash f right leaf move it over by 50 pixels in the top direction
02:24:51.439 throughout a duration of 1 second and with an ease
02:24:57.280 of power onein out and we can now duplicate this over
02:25:03.280 for the f as in footer left leaf so if I save this you'll see
02:25:09.520 that now on scroll those leaves move but it'll be much easier to see it if we
02:25:14.960 check out the full screen scroll all the way to the top and reload and now nicely
02:25:20.479 scroll to see our footer section let's go through the art through the menu and
02:25:26.319 finally check this out where to find us everything nicely falls into the place
02:25:32.160 although this leaf is not moving that is the right leaf so let's see f
02:25:37.680 right leaf how did we call it right here fight leaf
02:25:43.760 that is looking good to me oh it looks like it does move but a bit later once everything else moves so there's one
02:25:49.680 trick that we can do and that is to this timeline right after this dot 2
02:25:55.120 animation so after we close this left thing we can then add
02:26:01.040 this little character that says before what this means is that the element with
02:26:07.120 ID F right leaf moves up by 50 pixels and at the same time the element with ID
02:26:12.960 of F left leaf moves down by 50 pixels so they move together so now as I scroll
02:26:20.479 you can see that this leaf right here just moved and if I reload and check it
02:26:25.760 out on mobile see how all of the elements of the footer nicely load but in this case there isn't enough space to
02:26:32.319 show the right leave here as well so I just hide it and that is it for the footer or the contact section so what
02:26:39.520 I'll do is close the files open up my terminal and run git add dot getit
02:26:45.680 commit-m implement contact section and then get
02:26:51.439 push so now the full application has been pushed over to GitHub this has been
02:26:56.640 such an amazing project but now is where the real learning begins sure we have
02:27:02.000 implemented a couple of animations across all the different sections but I need you to fully understand how GSAP
02:27:09.359 truly works behind the scenes and I want you to be able to implement these complex animations on your own in your
02:27:16.479 future applications that you will be working on not just replicating what we did together in this course of course
02:27:24.080 building this project already gave you a nice foundation to build your GSA skills on top of but now we're going to dive
02:27:31.040 into the ultimate GSA course where we're going to dive deep into every single
02:27:36.720 little GAP property so that you truly understand how it works behind the scenes once again congratulations on
02:27:44.080 coming to the end of this course and developing this project but now is where the real journey begins enjoy and
02:27:52.080 congrats
