# StudenTeacher
*"Tell me and I will forget. Teach me and I remember. Ivolve me and I learn"* - Benjamin Franklin

StudenTeacher is a web application built to give students the ability to be involved in their learning, **even during a pandemic**. Using WebRTC technology, students are able to join small meeting groups to teach each other concepts that they learned in class. The application was designed and developed to be easy to use and accesible to all users regardless of technical knowledge or technology available to them. As long as the user has an internet connection, they can use this application to get involved in their learning. 

# Motivation For This Software:
It's my strong belief that education is a right to everyone, this software aims to make it easier, and more enjoyable for people to get involved and truly learn from school. That's what drove me to build this software as a web application, because the web can be accessed by any device (even a fridge), so there are no restrictions on who can use this software. The UI is minimal, simple and easy to navigate allowing non-technical users to easily understand and use the software.

# Technical Aspect:
I used Express for my server structure and API, MySQL (+ sequelize as an ORM) as my DB, Socket.io to send messages and communicate information for p2p connections, Peer JS for the actual p2p connections and for authentication I used Express sessions and JWT + passport JS

# Further Development:
This project was completed over the course of 36 hours by one person so I would expect there to be A LOT of improvements that can be made to this, so if you would like to develop this software on your own you can do so by doing the following:

```bash
$ git clone https://github.com/AmeerHamoodi/public_DH.git
$ cd ./public_DH
$ npm install
$ gulp
```
Ensure that gulp has been installed globally, if it hasn't run `npm i gulp -g` then re-run `gulp`. You will also need to install XAMPP and start up your apache server and MySQL.






# License MIT:

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
