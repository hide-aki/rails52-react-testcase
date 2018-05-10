# README

This application is Rails 5.2 blog which supports these things:
* Realtime comments on Categories/Posts
* Categories/Posts
Technologies:
* React, Redux, React-Redux-Router, Saga, Thunk
* Semantic-UI as CSS framework (with Semantic React)
* ActionCable and Rails Delayed Jobs
Tradeoffs:
* CSRF protection is disabled
* Comment react page is implemented without redux
* Validation on client is implemented via alert (without highlighting of fields)
* Response from server-side validation never used
* Code is not covered by any of the tests

## Why you should check it?
It could be used as a reference for the newbies in rails: it is simple enough to understand pros/cons, all 'tricky' points have comments.