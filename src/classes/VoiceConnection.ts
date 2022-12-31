//External dependencies
import { joinVoiceChannel, VoiceConnection as DiscordVoiceConnection } from '@discordjs/voice';
import { VoiceBasedChannel } from 'discord.js';

export default class VoiceConnection {
	_channel: VoiceBasedChannel;
	_connection!: DiscordVoiceConnection;

	public constructor(channel: VoiceBasedChannel) {
		this._channel = channel;
		this.join(channel);
	}

	public async join(channel: VoiceBasedChannel): Promise<boolean> {
		this._channel = channel;

		const connection: DiscordVoiceConnection = await joinVoiceChannel({
			channelId: channel.id,
			guildId: channel.guild.id,
			adapterCreator: channel.guild.voiceAdapterCreator
		});

		//Deafen the bot
		await channel.guild.me?.voice.setDeaf(true);

		this._connection = connection;

		return !!connection;
	}
}
