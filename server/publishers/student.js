Meteor.publish("Student", function () {
    	return Student.find();
});