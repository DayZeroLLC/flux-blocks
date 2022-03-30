import { SvelteComponentTyped } from "svelte";
import { BreadcrumbItem } from "carbon-components-svelte";
declare const __propDef: {
    props: {
        /** Set to `true` to hide the breadcrumb trailing slash */ noTrailingSlash?: boolean;
        /** Set to `true` to display skeleton state */ skeleton?: boolean;
        /** BreadcrumbItems to display */ items?: BreadcrumbItem[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type FluxBreadcrumbProps = typeof __propDef.props;
export declare type FluxBreadcrumbEvents = typeof __propDef.events;
export declare type FluxBreadcrumbSlots = typeof __propDef.slots;
export default class FluxBreadcrumb extends SvelteComponentTyped<FluxBreadcrumbProps, FluxBreadcrumbEvents, FluxBreadcrumbSlots> {
}
export {};
