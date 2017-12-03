var keystone = require('keystone');

var TeamMember = keystone.list('TeamMember');

/**
 * List Team Members
 */
exports.list = function (req, res) {
	TeamMember.model.find(function (err, items) {

		if (err) return res.json({ err: err });

		res.json({
			members: items,
		});

	});
};

/**
 * Get Team Member by ID
 */
exports.get = function (req, res) {
	TeamMember.model.findById(req.params.id).exec(function (err, item) {

		if (err) return res.json({ err: err });
		if (!item) return res.json('not found');

		res.json({
			member: item,
		});

	});
};
