var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Partner Model
 * ==========
 */
var Partner = new keystone.List('Partner');

Partner.add({
	name: { type: Types.Text, required: true, initial: true },
	logo: { type: Types.Relationship, ref: 'FileUpload', required: true, initial: true },
	description: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
	},
	website: { type: Types.Text, required: false, initial: false },
});


/**
 * Registration
 */
Partner.register();
