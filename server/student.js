Meteor.methods({

	'addStudentInfo':function(data, callback){
		Student.insert(data, 
			function(err, result){
				if(err){
					throw new Meteor.Error("An error occured inserting info", err);
				}
			});
	}
});