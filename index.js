// run `node index.js` in the terminal

console.log(`Hello Node.js`, process);
var openRooms = {}; // open rooms key value { roomid: roomProperties}

for (var i = 0; i < 10; i++) {
  var roomRNG = 0;

  roomRNG = Math.floor(Math.random() * 10000);

  var roomName;

  roomName = 'room' + roomRNG;

  var roomData = [];
  roomData.push('hard');
  roomData.push('english');
  console.log(roomData);

  openRooms[roomName] = roomData;
}

console.log(openRooms);

console.log('Length: ' + Object.keys(openRooms).length);
