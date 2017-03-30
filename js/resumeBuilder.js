var workExperienceJson = {
	"jobs":[
		{
			"employer":"Genetec",
			"title":"Software developper engineer in test",
			"location":"Montreal",
			"dates":"Mai 2014 - Now",
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
	"biopic":"images/profile.jpg",
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

$("#header").append(HTMLbioPic.replace("%data%", bioJson.biopic));

$("#header").append(HTMLwelcomeMsg.replace("%data%", bioJson.welcomeMessage));
$("#header").append(HTMLskillsStart);

for (var key in bioJson.skills)
{
	if(bioJson.skills.hasOwnProperty(key))
	{
		$("#skills").append(HTMLskills.replace("%data%", bioJson.skills[key]));
	}
}

$("#workExperience").append(HTMLworkStart);

for (var key in workExperienceJson.jobs)
{
	if(workExperienceJson.jobs.hasOwnProperty(key))
	{
		var job = workExperienceJson.jobs[key];
		$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", job.employer)+HTMLworkTitle.replace("%data%", job.title));
		$(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates)+HTMLworkLocation.replace("%data%", job.location));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
	}
}





