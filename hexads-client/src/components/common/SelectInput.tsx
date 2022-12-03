import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiSelector } from "react-icons/hi";
import { MdCheck } from "react-icons/md";

interface SelectInputProps {
  value: any;
  setter: any;
  valueMap: Array<Object>;
  label: string;
  mandatory: boolean;
  styles: string;
}

interface SelectInputBoxProps {
  value: any;
  setter: any;
  valueMap: Array<Object>;
  styles: any;
}

const SelectInput = ({
  label,
  valueMap,
  value,
  mandatory,
  setter,
  styles,
}: SelectInputProps) => {
  return (
    <section className="flex flex-col items-start gap-5 w-full">
      <label htmlFor={label} className="text-secondary text-lg font-medium">
        {label} {mandatory && <span className="text-mandatory">*</span>}
      </label>
      <SelectInputBox
        setter={setter}
        value={value}
        valueMap={valueMap}
        styles={`text-secondary px-5 py-3 text-lg font-medium focus:outline-none border-[0.75px] border-border bg-background w-full ${styles}`}
      />
    </section>
  );
};

const SelectInputBox = ({
  value,
  setter,
  valueMap,
  styles,
}: SelectInputBoxProps) => {
  return (
    <Listbox value={value} onChange={setter}>
      <div className="relative w-full">
        <Listbox.Button
          className={`flex items-center justify-between ${styles}`}>
          <span className="flex flex-start text-secondary">{value}</span>
          <HiSelector className="h-5 w-5 text-accent" aria-hidden="true" />
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <Listbox.Options
            className={`z-50  w-full absolute bg-background border-t-0 focus:outline-none border-[0.75px] pb-2 border-border`}>
            {valueMap.map((value: any, idx: any) => (
              <Listbox.Option
                key={idx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "text-accent" : "text-secondary"
                  }`
                }
                value={value}>
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate text-start ${
                        selected ? "font-medium" : "font-normal"
                      }`}>
                      {value}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-accent">
                        <MdCheck className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default SelectInput;
