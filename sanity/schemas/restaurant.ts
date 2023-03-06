import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',

  fields: [
    {
      name: "name",
      type: "string",
      title: "Restaurant name",
      validation: Rule => Rule.required(),
    },

    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: Rule => Rule.required().max(200), 
    },

    {
      name: "image",
      type: "image",
      title: "Image of the Restaurant",
    },

    {
      name: "lat",
      type: "number",
      title: "Latitude of the Restaurant",
    },

    {
      name: "long",
      type: "number",
      title: "Longitude of the Restaurant",
    },

    {
      name: "address",
      type: "string",
      title: "Restaurant address",
      validation: Rule => Rule.required(),
    },

    {
      name: "rating",
      type: "number",
      title: "Enter a Rating (1-5 stars)",
      validation: Rule => Rule.required()
      .min(1)
      .max(5)
      .error("Please enter a value between 1 and 5"),
    },

    // Use "reference" type to link this to another content element, e.g. a restaurant can have many tags of category
    {
      name: "type",
      title: "Category",
      validation: Rule => Rule.required(),
      type: "reference",
      to: [{type: "category"}]
    },

    {
      name: "dish",
      type: "array",
      title: "Dishes",
      of: [{ type: "reference", to: [{ type: "dish"}] }]
    },
  ],
})
