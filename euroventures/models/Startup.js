var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Startup Model
 * ==========
 */
var Startup = new keystone.List('Startup');

Startup.add({
	name: { type: Types.Text, required: true, initial: true },
	logo: { type: Types.Relationship, ref: 'FileUpload', required: true, initial: true },
	description: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
	},
	website: { type: Types.Text, required: false, initial: false },
	contacts: { type: Types.Relationship, ref: 'Contact', many: false },
});


/**
 * Registration
 */
Startup.register();
