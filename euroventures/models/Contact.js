var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Contact Model
 * ==========
 */
var Contact = new keystone.List('Contact');

Contact.add({
	name: { type: Types.Text, required: true, initial: true },
	email: { type: Types.Email, required: true, initial: true },
	linkedin: { type: Types.Url, required: false, initial: false },
	twitter: { type: Types.Url, required: false, initial: false },
	facebook: { type: Types.Url, required: false, initial: false },
});


/**
 * Registration
 */
Contact.register();
