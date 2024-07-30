import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
    Transition,
} from "@headlessui/react";
import Icon from "@/components/Icon";

type ItemsType = {
    id: string;
    title: string;
};

type SelectTokenProps = {
    className?: string;
    classButton?: string;
    classOption?: string;
    label?: string;
    titleBox?: string;
    placeholder?: string;
    value: any;
    onChange: any;
    items: ItemsType[];
};

const SelectToken = ({
    className,
    classButton,
    classOption,
    label,
    titleBox,
    placeholder,
    value,
    onChange,
    items,
}: SelectTokenProps) => (
    <div className={`${className || ""}`}>
        {label && <div className="mb-2">{label}</div>}
        <Listbox
            className="relative"
            value={value}
            onChange={onChange}
            as="div"
        >
            <ListboxButton
                className={`flex justify-between items-center w-full h-10 px-3.5 rounded-xl border-2 border-theme-stroke text-base-2 outline-none transition-colors ui-open:border-theme-border-brand ${
                    value ? "text-theme-secondary" : "text-theme-secondary"
                } ${classButton || ""}`}
            >
                <div className="truncate">
                    {value ? value.value : placeholder}
                </div>
                <Icon
                    className="shrink-0 !w-4 !h-4 ml-4 fill-theme-secondary transition-transform ui-open:rotate-180"
                    name="arrow-down"
                />
            </ListboxButton>
            <Transition
                enter="duration-200 ease-out"
                enterFrom="scale-95 opacity-0"
                enterTo="scale-100 opacity-100"
                leave="duration-300 ease-out"
                leaveFrom="scale-100 opacity-100"
                leaveTo="scale-95 opacity-0"
            >
                {/* <ListboxOptions className="absolute top-full left-0 right-0 z-2 mt-0.5 border-2 border-theme-stroke bg-theme-on-surface-1 rounded-xl outline-none overflow-hidden">
                    {items.map((item) => (

                        <ListboxOption
                            key={item.id}
                            value={item}
                        >
                            <div key={item.id} className="flex items-center px-4 py-2 bg-white shadow justify-between">
                                <div>
                                    <div>
                                        <div className="flex items-center">
                                            <img src={item.icon} alt={`${item.name} icon`} className="w-3 h-3 mr-2" />
                                            <span className="text-gray-900 font-medium">{item.name} ({item.abs})</span>
                                        </div>
                                        <span className="text-gray-500">{item.sub} {item.abs}</span>
                                    </div>
                                </div>
                                <div className="flex-col flex mt-1 text-gray-500">
                                    <span className="ml-2 text-gray-900 font-medium text-right">{item.value}</span>
                                    <span className="ml-2">@{item.rate}</span>
                                </div>
                            </div>
                        </ListboxOption>
                    ))}
                </ListboxOptions> */}
            </Transition>
        </Listbox>
    </div>
);

export default SelectToken;
