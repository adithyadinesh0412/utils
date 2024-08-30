/**
 * name : constants/common.js
 * author : Adithya Dinesh
 * Date : 23 - Aug - 2024
 * Description : All commonly used constants through out the package
 */

module.exports = {
    PROJECT_STATUS_PUBLISHED : 'published',
    PROJECT_PROJECTION_FIELDS : ["_id" , "title","createdBy","createdAt","description"],
    RESOURCE_TYPE_PTOJECT : 'projects',
    PROJECT_TRANSFORM_KEYS : {
        _id : "id",
        createdAt : "created_at",
        createdBy : "created_by"
    },
    AUTH_TOKEN_KEY : 'x-auth-token',
    HEADER_CONTENT_TYPE : 'content-type',
    SURVEY_STATUS_ACTIVE : 'active',
    SURVEY_PROJECTION_FIELDS : ["_id" ,'type' , "name","author","createdAt","isRubricDriven"],
    SURVEY_TYPE_OBSERVATION : 'observation',
    SURVEY_TYPE_SURVEY : 'survey',
    SURVEY_TYPE_KEY : 'type',
    SURVEY_IS_RUBRIC_DRIVEN_KEY : 'isRubricDriven',
    SURVEY_TYPE_OBSERVATION_WITH_RUBRICS : 'observation_with_rubrics',
    SURVEY_TRANSFORM_KEYS : {
        _id : "id",
        name : 'title',
        createdAt : "created_at",
        author : "created_by"
    },

}