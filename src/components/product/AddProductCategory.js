import Topbar from '../topbar/Topbar';
import styles from './AddProductCategory.module.scss';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import Button from '../UI/button/Button';
import Input from '../UI/input/Input';

const AddProductCategory = function () {
  return (
    <div className={styles.view}>
      <Topbar title='Product Category' />
      <h1 className={styles.view__heading}>Add Product Category</h1>
      <div className={styles.view__container}>
        <form className={styles.view__form}>
          <div className={styles.form__group}>
            <label htmlFor='product-name' className={styles.form__label}>
              Product Category
            </label>
            <Input
              id='product-category'
              name='product-category'
              type='text'
              className={styles.form__input}
              placeholder='Product Category'
            />
          </div>
          <Button type='submit' className={styles.form__button}>
            ADD CATEGORY
          </Button>
        </form>
        <div className={styles.view__tableWrapper}>
          <div className={styles.view__tableContainer}>
            <table className={styles.view__table}>
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td>Gadgets</td>
                  <td>
                    <div className={styles.view__tableAction}>
                      <Link
                        to='edit/:id'
                        className={styles.view__tableEdit}
                        title='edit'
                      >
                        <Icon.Edit />
                      </Link>
                      <Button
                        className={styles.view__tableDelete}
                        title='delete'
                      >
                        <Icon.Trash2 />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>Gadgets</td>
                  <td>
                    <div className={styles.view__tableAction}>
                      <Link
                        to='edit/:id'
                        className={styles.view__tableEdit}
                        title='edit'
                      >
                        <Icon.Edit />
                      </Link>
                      <Button
                        className={styles.view__tableDelete}
                        title='delete'
                      >
                        <Icon.Trash2 />
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductCategory;
