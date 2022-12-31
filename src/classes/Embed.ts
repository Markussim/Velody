// External dependencies
import { EmbedBuilder } from '@discordjs/builders';
import { APIEmbed } from 'discord-api-types/v9';

export default class Embed {
	_embed: EmbedBuilder;

	constructor() {
		this._embed = new EmbedBuilder();
		this._embed.setAuthor({
			name: 'Velody',
			iconURL: 'https://raw.githubusercontent.com/linusromland/Velody/master/assets/logo.jpeg',
			url: 'https://github.com/linusromland/Velody'
		});
		this._embed.setColor([124, 178, 190]);
	}

	get embed(): APIEmbed {
		return this._embed.toJSON();
	}

	loading(): Embed {
		this._embed.setTitle('Velody is thinking...');
		return this;
	}

	setTitle(title: string): Embed {
		this._embed.setTitle(title);
		return this;
	}

	setDescription(description: string): Embed {
		this._embed.setDescription(description);
		return this;
	}
}