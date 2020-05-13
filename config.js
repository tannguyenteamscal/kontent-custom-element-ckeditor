CKEDITOR.editorConfig = function (config) {
	config.toolbarGroups = [
		'Youtube','youtube',
		{ name: 'document', groups: ['mode', 'document', 'doctools'] },
		{ name: 'clipboard', groups: ['clipboard', 'undo'] },
		{ name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
		{ name: 'forms', groups: ['forms'] },
		{ name: 'Youtube', groups: ['Youtube']},
		'/',
		{ name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
		{ name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
		{ name: 'links', groups: ['links'] },
		{ name: 'insert', groups: ['insert'] },
		'/',
		{ name: 'styles', groups: ['styles'] },
		{ name: 'colors', groups: ['colors'] },
		{ name: 'tools', groups: ['tools'] },
		{ name: 'others', groups: ['others'] },
		{ name: 'about', groups: ['about'] }
	];

	config.extraPlugins = 'youtube';
	config.youtube_responsive = true;
	config.youtube_autoplay = false;
	config.youtube_privacy = true;
	config.youtube_width = '640';
	config.youtube_height = '480';
	config.allowedContent = true;


	config.removeButtons = 'NewPage,Preview,Print,Templates,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,CopyFormatting,RemoveFormat,BidiLtr,BidiRtl,Language,Flash,PageBreak,Styles,About,Save,CreateDiv,Maximize';
};
