Template.stud.created = function () {
	this.searchName = new ReactiveVar('');
	this.from = new ReactiveVar('');
	this.to = new ReactiveVar('');
}

Template.stud.helpers({
	data(){
		return Student.find().fetch();  	
	},
	pres() {
		let searchName = Template.instance().searchName.get();

		let from = Template.instance().from.get();
		let to = Template.instance().to.get(); ;

		if(from && to){
			let data = Student.find({ name: searchName , 
				"createdAt": {  $gte: new Date(from) , $lte: new Date(to)  }, present:true }).count();
			return data;
		}
		else{
			return Student.find({name: searchName , present:true}).count();
	    }
	},
	leave(){
		let searchName = Template.instance().searchName.get();
		let from = Template.instance().from.get();
		let to = Template.instance().to.get(); ;

		if(from && to){
			let data = Student.find({ name: searchName , 
				"createdAt": {  $gte: new Date(from) , $lte: new Date(to)  }, present:false }).count();
			return data;
		}
		else{
			return Student.find({name: searchName , present:false}).count();
	    }
	}

});

Template.stud.events({

	'keyup #searchName': function (event, template) {
		let value = event.target.value.trim();

        if ( value !== ''  ) { //&& event.keyCode === 13
        	template.searchName.set( value );
        }

        if ( value === '' ) {
        	template.searchName.set( value );
        }

    },

    'change #from, keyup #from, keydown #from': function (event, template) {
    	let value = event.target.value.trim();

        if ( value !== ''  ) { //&& event.keyCode === 13
        	template.from.set( value );
        }

        if ( value === '' ) {
        	template.from.set( value );
        }

    },
    
    'change #to, keyup #to, keydown #to': function (event, template) {
    	let value = event.target.value.trim();

        if ( value !== ''  ) { //&& event.keyCode === 13
        	template.to.set( value );
        }

        if ( value === '' ) {
        	template.to.set( value );
        }

    },
    'submit form': function (event, template) {
    	event.preventDefault();
    	var name = template.find('#name').value;
    	var myValue = $('input[name="present"]:checked').val();
    	present =  (myValue == 'True');
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
    },
    'click #clear': function (event, template) {
        $('#from').val('');
        $('#to').val('');
        $('#searchName').val('');
        template.searchName.set('');
        template.from.set('');
        template.to.set('');
    }
});