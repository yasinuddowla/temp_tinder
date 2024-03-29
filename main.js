
 $('a[href*="#!..."]').click(function(){
  return false;
});
  
  var animationEndEvent = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
  
  var Person = {
    wrap: $('#people'),
    people: [
      {
        name: 'Linda',
        age: 25,
        img: "https://i.imgur.com/QZuGC10.jpg"
      },
      {
        name: 'Lisa',
        age: 20,
        img: "https://i.imgur.com/1EWwp59.jpg"
      },
      {
        name: 'Sandra',
        age: 18,
        img: "https://i.imgur.com/Lu3laIj.jpg"
      },
      {
        name: 'Chloe',
        age: 18,
        img: "https://i.imgur.com/WgYIxhw.png"
      },
      {
        name: 'Alexa',
        age: 23,
        img: "https://i.imgur.com/D0PQegY.png"
      },
      {
        name: 'Maria',
        age: 21,
        img: "https://i.imgur.com/eqd5IhH.jpg"
      },
      {
        name: 'Emma',
        age: 24,
        img: "https://i.imgur.com/4F9NXPo.png"
      },
      {
        name: 'Sara',
        age: 18,
        img: "http://i40.tinypic.com/ofxe21.jpg"
      },
      {
        name: 'Lara',
        age: 22,
        img: "https://i.imgur.com/HMkdN6A.jpg"
      }
    ],   
    add: function(){
      var random =     this.people[Math.floor(Math.random() * this.people.length)];
      this.wrap.append("<div class='person'><img alt='" + random.name + "' src='" + random.img + "' /><span><strong>" + random.name + "</strong>, " + random.age + "</span></div>");
    }
  }
  
  var App = {
    yesButton: $('.button.yes .trigger'),
    noButton: $('.button.no .trigger'),
    blocked: false,
    like: function(liked){
      var animate = liked ? 'animateYes' : 'animateNo';
      var self = this;
      Person.add();
      if (!this.blocked) {
        this.blocked = true;           
        $('.person').eq(0).addClass(animate).one(animationEndEvent, function() {
          $(this).remove();
          self.blocked = false;
        });
      }
    }
  };
  
  var Phone = {
    wrap: $('#phone'),
    clock: $('.clock'),
    updateClock: function() {
      var date = new Date();
      var hours = date.getHours();
      var min = date.getMinutes();
      hours = (hours < 10 ? "0" : "") + hours;
      min = (min < 10 ? "0" : "") + min;
      var str = hours + ":" + min;
      this.clock.text(str);
    }
  }
  
  App.yesButton.on('mousedown', function() {
    App.like(true);
  });
  
  App.noButton.on('mousedown', function() {
    App.like(false);
  });
  
  $(document).ready(function() {
    Person.people.forEach(function(person){
      new Image().src = person.img; 
    });
    Phone.updateClock();
    setInterval('Phone.updateClock()', 1000);
    
    Person.add();
    Person.add();
    Person.add();
    Person.add();
  });
