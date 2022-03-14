// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// schema object
import works from './works'
import testimonials from './testimonials'
import brands from './brands'
import about from './about'
import experience from './experience'
import skills from './skills'
import workExperience from './workExperience'
import contact from './contact'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    works, testimonials, brands, about, skills, workExperience, experience, contact
    /* Your types here! */
  ]),
})
