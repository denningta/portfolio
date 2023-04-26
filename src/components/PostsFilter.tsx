import { ChangeEvent, ReactNode, useEffect, useState } from "react"
import { IoClose } from "react-icons/io5"
import { IoIosAdd } from "react-icons/io"

export interface FilterProps<T> {
  data: T[]
  filters: {
    [key: string]: {
      value: any
      type: string | Array<string>
    }
  }
  children: (filteredData: T[]) => ReactNode
}

export interface FilterComponentProps {
  key: string
  onChange?: (e: ChangeEvent<HTMLInputElement>, key: string) => void
  [key: string]: any
}

function Filter<T extends unknown>({ data, children, filters }: FilterProps<T>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [filterElements, setFilterElements] = useState<{
    element: (props: FilterComponentProps) => JSX.Element,
    key: string
    filter?: string
    initialValue?: string
  }[]>([])
  const [filterOptions, setFilterOptions] = useState<string[]>([])
  const [filteredData, setFilteredData] = useState<T[]>(data)

  const getFilterOptions = <R extends T>(element: R) => {
    const options = []

    for (let k in element) {
      if (k.match(/_\w+/)) continue
      options.push(k)
    }
    return options
  }

  useEffect(() => {
    setFilterOptions(getFilterOptions(data[0]))
  }, [data])

  useEffect(() => {
    Object.keys(filters).forEach((key) => {
      handleFilterAdd(key, filters[key].value)
    })

  }, [filters])

  const toggleFilterMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleFilterDelete = (index: number, key: string) => {
    const newFilterElements = filterElements.filter((el, i) => i !== index)
    setFilterElements(newFilterElements)

    const newFilterOptions = filterOptions.concat(key)
    setFilterOptions(newFilterOptions)
  }

  const handleFilterAdd = (key: string, initialValue?: string) => {
    const newFilterElements = filterElements.concat({ element: InputFilter, key: key, initialValue: initialValue })
    setFilterElements(newFilterElements)

    const newFilterOptions = filterOptions.filter((optionKey) => key !== optionKey)
    setFilterOptions(newFilterOptions)

    setIsMenuOpen(false)
  }

  const filterData = () => {

  }

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>, key: string) => {
    const newFilters = {
      ...filters
    }
    if (target.value) newFilters[key].value = target.value
    if (target.value === '') delete newFilters[key]
  }

  return (
    <>
      <div className="flex flex-wrap items-center ">

        {filterElements.map(({ element, key }, i) =>
          <div key={`element-${i}`} className="flex items-center mr-4 mb-2">
            {element({ key, onChange })}
            <button
              onClick={() => handleFilterDelete(i, key)}
              className="flex items-center justify-center ml-2 bg-neutral-600 text-white h-[20px] w-[20px] rounded-full"
            >
              <IoClose />
            </button>
          </div>
        )}

        <div className="relative">
          <button
            className={`flex items-center rounded-lg dark:bg-neutral-800 drop-shadow border dark:border-neutral-700 border-neutral-200 px-3 py-1 mb-2 transition ease-in-out ${isMenuOpen ? 'bg-neutral-200' : 'bg-neutral-100'}`}
            onClick={toggleFilterMenu}
          >
            <div className="mr-1 opacity-70">
              <IoIosAdd />
            </div>
            <div className="mr-1">Filter</div>
          </button>
          {isMenuOpen &&
            <div className={`absolute z-50 top-10 left-0 min-w-fit px-3 py-2 bg-neutral-100 dark:bg-neutral-800 border dark:border-neutral-700 rounded`}>
              {filterOptions.map((key, i) =>
                <div
                  key={`option-${i}`}
                  className="hover:bg-neutral-500 px-3 py-1 rounded cursor-pointer"
                  onClick={() => handleFilterAdd(key)}
                >
                  {camelToTitleCase(key)}
                </div>
              )}
            </div>
          }
        </div>
      </div>
      <div>
        {children(filteredData)}
      </div>
    </>
  )
}


const InputFilter = ({ key, onChange }: FilterComponentProps) => {
  return (
    <input
      className="px-4 py-1 rounded-full outline-none border border-neutral-300 dark:bg-neutral-700 dark:border-neutral-600"
      placeholder={`Filter by ${camelToTitleCase(key)}`}
      onChange={(e) => onChange && onChange(e, key)}
    />
  )
}

const SelectFilter = ({ key, options, onChange }: FilterComponentProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <input />

    </div>
  )

}

const camelToTitleCase = (text: string) => {
  const result = text.replace(/([A-Z])/g, " $1");
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult
}

export default Filter
