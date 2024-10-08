
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.0.0'
 * Timestamp: Mon Oct 10 2022 16:01:57 GMT+0500 (Pakistan Standard Time)
 *
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class Cta extends ContentItem {
    public url!: Elements.TextElement;
    public openNewTab!: Elements.NumberElement;
    public text!: Elements.TextElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'open_new_tab') {
                    return 'openNewTab';
                }
                return elementName;
            })
        });
    }
}
