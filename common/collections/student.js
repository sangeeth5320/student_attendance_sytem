Student = new Meteor.Collection('Student');

StudentSchema = new SimpleSchema({
  "name":{
    type: String,
    label: "name",
  },
  "date": {
    type: Date,
    label: "principal Id",
    autoValue: function() {
	    if ( this.isInsert ) {
	      return new Date;
	    }
    }
  },
  "present":{
    type: Boolean,
    label: "present"
  },
  "inTime":{
    type: Date,
    label: "inTime",
    optional:true
  },
  "outTime":{
    type: Date,
    label: "outTime",
    optional:true
  }
});



//Student.attachSchema(StudentSchema);


if (Meteor.isClient) {
  Meteor.subscribe("Student");
} 
