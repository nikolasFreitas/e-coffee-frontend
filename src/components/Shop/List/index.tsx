import React from 'react';
import { Translator } from 'locale';
import { useStoreHooks } from './hooks';
import { Link } from 'components/Link';
import { ButtonGrow } from 'components/Fallbacks/ButtonGrow';

interface Props {
  asList?: boolean;
}

export const StoreList = ({asList}: Props) => {
  const { renderList } = useStoreHooks();

  return (
    <div className="content py-3">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-9">
          <h2>
            {Translator.i18n.translate('shops.title')}
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-9">
          {renderList}
          <div className="row">
            <div className="col">
              <div hidden={asList}>
                <ButtonGrow loading={false} onClick={()=> {}}>
                  Load More
                </ButtonGrow>
              </div>
              <div hidden={!asList}>
                <Link 
                  className="btn btn-light p-3 w-100 text-uppercase"
                  to="/shops"
                >
                  {Translator.i18n.t('shops.seeMore')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
