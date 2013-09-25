nb.define('input-group', {
    events: {
        'click': 'oninit',
        'disable': 'onDisable',
        'enable': 'onEnable'
    },

    oninit: function() {
        var that = this
        that.$node = $(this.node);
        that.disabled = this.data()['disabled']
        $(this.children()).each(function() {
            if (this.$node.hasClass('nb-input')) {
                that.input = this;
            } else {
                that.button = this;
            }
        })
    },
    /**
     * Disables the input-group
     */
    onDisable: function() {
        this.input.trigger('disable');
        this.button.trigger('disable');
        this.disabled = true;
    },

    /**
     * Enables the input-group
     */
    onEnable: function() {
        this.input.trigger('enable');
        this.button.trigger('enable');
        this.disabled = false;
    }
});