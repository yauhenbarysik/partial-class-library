# Introduction

I don't know what about you, but I always struggled **lack of Partial Classes in TypeScript** like in C# i.e. 
<br>
While both languages have Microsoft roots for some reason MS folks didn't add (and reject to add) Partial Classes into TypeScript. Thow, you can use a bit spiky scary thing, called **"Mixins"** from JavaScript itself for similar functionality. So I decided to build some sort of **"Syntax Sugar Frankenstein"** over it to have eased up way to use mixins for combining multiple classes under custom name :)

# Usage
You can find usage examples apparantly in `examples` folder ;-)
<br>
Or you can test it locally like that:
>git clone git@github.com:yauhenbarysik/partial-class-library.git
>cd partial-class-library
>npm i
>npm run build

<br>

Then, go back to your directory with project, and do like this:
>npm install --safe-dev full_path_to_library_folder

<br>

And, just import it into your `*.ts` (or `*.js`) file like that:
>import { PartialClass } from "partial-class-library";

<br>

And, congrats, now you can use it, just don't forget to look at `examples`, it is left for a reason.
