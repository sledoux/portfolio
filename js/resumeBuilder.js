var workExperienceJson = {
	"jobs":[
		{
			"employer":"Genetec",
			"title":"SDET",
			"location":"Montreal",
			"dates":"20140505-now",
			"description":"My job was to develop and maintain a full suite of automated tests for multiple services."
		}],
	//"display":"function(){alert('Work display function triggered.');}"
};

var bioJson = {
	"name":"Samuel Ledoux",
	"role":"Developper",
	"contacts": {
		"mobile": "1-438-870-8616",
		"email": "samuel.ledoux5@gmail.com",
		"github": "github.com/sledoux",
		"location": "Laval, Qc"
	},
	"welcomeMessage": "Welcome to my resume",
	"skills":["C#","JavaScript","HTML","CSS"],
	"biopic":"TOADD",
	//"display":"function(){alert('Bio display function triggered');}"
};

var educationJson = {
	"schools":[
		{
			"name": "Polytechnique",
			"location": "Montreal",
			"degree":"Software engineering",
			"majors":"Multimedia concentration",
			"dates":20140501,
			"url":"http://www.polymtl.ca/en"
		}],
	"onlineCourses":[
		{
			"title":"Cryptography I",
			"school":"Stanford University",
			"date":20131001,
			"url":"https://www.coursera.org/learn/crypto"
		}],
	//"display":"function(){alert('Education display function called.');}"
};

var projectsJson = {
	"projects":[
		{
			"title":"Stratocats",
			"dates":"",
			"description":"This project is about creating a web application for friends to listen & share music together.",
			"images":[]
		}
	],
	//"display":"function(){alert('Projects display triggered.');}"
};

$("#header").prepend(HTMLheaderRole.replace("%data%", bioJson.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bioJson.name));

for (var key in bioJson.contacts)
{
	if(bioJson.contacts.hasOwnProperty(key))
	{
		var contactInfo = HTMLcontactGeneric.replace("%contact%", key);
		$("#topContacts").append(contactInfo.replace("%data%", bioJson.contacts[key]));
	}
}

$("#header").append(HTMLbioPic.replace("%data%", "images/profile.jpg"));
$("#header").append(HTMLbioPic.replace("%data%", "images/profile.jpg"));

//$("#workExperience").append(workExperienceJson);

