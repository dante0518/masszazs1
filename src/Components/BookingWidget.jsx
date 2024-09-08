import React, { useEffect, useRef } from 'react';

function BookingWidget() {
    const widgetContainerRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = "//widget.simplybook.it/v2/widget/widget.js";
        script.onload = () => {
            new SimplybookWidget({"widget_type":"iframe","url":"https:\/\/bastyamasszazsstudio.simplybook.it","theme":"classic","theme_settings":{"timeline_hide_unavailable":"1","hide_past_days":"0","timeline_show_end_time":"0","timeline_modern_display":"as_slots","sb_base_color":"#8c7150","display_item_mode":"block","body_bg_color":"#ffffff","sb_review_image":"","btn_color_1":"#8c7150","sb_company_label_color":"#253f3c","hide_img_mode":"1","sb_busy":"#c7b3b3","sb_available":"#e5f2ff"},"timeline":"modern_week","datepicker":"top_calendar","is_rtl":false,"app_config":{"clear_session":0,"allow_switch_to_ada":0,"predefined":[]},"container_id":"sbw_1xygxq"});
        };
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
       <div id="sbw_1xygxq" ref={widgetContainerRef}></div>
    );
}

export default BookingWidget;
