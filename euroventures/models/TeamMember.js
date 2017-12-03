var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * TeamMember Model
 * ==========
 */
var TeamMember = new keystone.List('TeamMember');

TeamMember.add({
    name: { type: Types.Name, required: true, index: true },
    email: { type: Types.Email, initial: true, required: true, unique: true, index: true },
    role: { type: Types.Text, initial: true, required: true },
    picture: { type: Types.Relationship, ref: 'FileUpload', required: false, initial: false },
    contacts: { type: Types.Relationship, ref: 'Contact', many: false },
    descrition: {type: Types.Html, wysiwyg: true, height: 400 },
});


/**
 * Registration
 */
TeamMember.register();
