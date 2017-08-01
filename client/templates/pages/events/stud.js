Template.stud.helpers({
  data(){
  	return Student.find().fetch();
  },
  present() {
    return Student.find(/*{name: "someName"}  */{present:true}).count();
  },
  leave(){
  	return Student.find({name: "ss"} ,{present:false}).count();
  }
});

Template.stud.events({
    'submit form': function (event, template) {
        event.preventDefault();
        var name = template.find('#name').value;
        var present = template.find('#present').value;
        var date = template.find('#date').value;

        var data = {
                    name: name,
                    present: present,
                    date: date
                }


	      Meteor.call('addStudentInfo',  data, function (err, result) {
	        if (err) {
	            alert("error while updating", err);
	        } else {
	            alert("You have updated your profile successfully");
	        }
	    });

     }
});