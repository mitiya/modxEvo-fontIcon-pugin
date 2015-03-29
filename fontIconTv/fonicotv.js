jQuery(document).ready(function () {
	jQuery("head").append("<link rel='stylesheet' type='text/css' href='" + fontCssFile + "' />");
	jQuery("head").append("<link rel='stylesheet' type='text/css' href='" + pluginCssFile + "' />");

	jQuery('input[name="tv' + Tvid + '"]').each(function () {
		this.nextSibling.parentNode.removeChild(this.nextSibling);
		jQuery(this).next().remove();
		jQuery(this).addClass("tvIconsInputs").after("<span></span>").next().addClass("icon tvIcons " + jQuery(this).val());
	});

	if (jQuery('[name=id]').val() == Tvid) {

		jQuery('select[name="type"]').val("option").hide();

		jQuery.get(fontCssFile, function (data) {
			var out = "";
			str = data;
			re = /(?:icon-)+(\w|-)*/ig
				icons = str.match(re)

				for (var i = 0; i < icons.length; i++) {
					out = (out + icons[i] + "||")
				}
				jQuery('[name=elements]').text(out);
		});
	}

});