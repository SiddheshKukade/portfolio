export default { // this contains the schema of how our testimonail table or document will look like 
    name: "testimonials",
    title: "Testimonials",
    type: "document",
    fields: [{
        name: 'name',
        title: "Name",
        type: "string",
    },
    {
        name: 'company',
        title: "Company",
        type: "string",
    },
    {
        name: 'imageurl',
        title: "ImgUrl",
        type: "image",
        options: {
            hotspot: true // user will be able to crop the image while uploading the image if he wants to 
        }
    },
    {
        name: 'feedback',
        title: "Feedback",
        type: "string",
    }

    ]
}