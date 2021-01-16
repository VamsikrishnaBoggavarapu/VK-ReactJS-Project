import json from '@shared/templates';
import forEach from 'lodash/forEach';
import template from 'lodash/template';
import { page } from '@shared/store/actions';

const extractTemplate = () => {
    const templates = {};
    forEach(json, (temp, page) => {
        let compiled = template(JSON.stringify(temp));
        templates[page] = JSON.parse(compiled({ ...temp }));
    });

    page.set(templates);
}

export default extractTemplate;