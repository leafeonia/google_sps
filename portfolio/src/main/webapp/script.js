// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

function loadMap(){
    console.log("loadMap()");
    const map = new google.maps.Map(
      document.getElementById('map'),
      {center: {lat: 32.115, lng: 118.958}, zoom: 15});

    const trexMarker = new google.maps.Marker({
      position: {lat: 32.110, lng: 118.9585},
      map: map,
      title: 'Nanjing University Xianlin Campus'
    });
}

function loadComment() {
    console.log("loadComment()");
    fetch('/comment').then(response => response.json()).then(comments => {
        const commentDiv = document.getElementById('CommentDiv');
        comments.forEach((comment) => {
            commentDiv.appendChild(createListElement(comment));
        });
    })
}

function init(){
    loadComment();
    loadMap();
}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}