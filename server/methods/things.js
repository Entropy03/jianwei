import {Things} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function() {

	Meteor.methods({
		'things.create' (_id, title, describe, category, scenes, type, pid) {
			console.log("message");

			check(_id, String);
			check(title, String);
			check(describe, String); //叙述
			check(category, Number);
			check(scenes, String);
			check(pid, String);
			check(type, String);
			let createdAt = new Date();
			let agree = []; //赞同
			let tags = []; //标签
			let ifstart = ''; //开始条件
			let things = {
				_id,
				title,
				describe,
				category,
				scenes,
				type,
				agree,
				tags,
				ifstart,
				createdAt
			};
			Things.insert(things);

		}
	});
}
