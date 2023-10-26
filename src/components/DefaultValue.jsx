import { slugifyWithCounter } from '@sindresorhus/slugify'
const slugify = slugifyWithCounter()

function DefaultValue({ title, description, defaultValue, id }) {
    return (
        <div className="border border-lightbluedarker dark:border-none bg-white dark:bg-darkcontent p-6 rounded-lg mb-6 shadow-sm transition-shadow duration-200">
            <h3
                id={id}
             className="font-semibold text-xl mb-4 text-primary dark:text-darkprimary">{title}</h3>
            <p className="text-gray-700 dark:text-white dark:text-opacity-50 mb-4">{description}</p>
            <div className="mt-2">
                <span className="font-medium text-gray-900 dark:text-lightbluedarker">Default value: </span> 
                <span className="text-primary dark:text-darkprimary">{defaultValue}</span>
            </div>
        </div>
    );
}

export default DefaultValue;
