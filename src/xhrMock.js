import mock from 'xhr-mock';
import Article from './models/Article';
import reactMD from './article/react-md';
import vueCliMD from './article/vue-cli-md';
import angularMD from './article/angular-md';
import _ from "lodash";

const storage = {
  getItem(dataType) {
    if (!localStorage.getItem(dataType)) {
      localStorage.setItem(
        dataType,
        JSON.stringify([
          reactMD,
          vueCliMD,
          angularMD
        ])
      );
    }

    return JSON.parse(localStorage.getItem(dataType));
  },
  setItem(dataType, data) {
    localStorage.setItem(dataType, JSON.stringify(data));
  },
};

export default function setupXhrMock() {
  mock.setup();

  mock.get('/api/articles', (req, res) => {
    return res
      .status(200)
      .body(JSON.stringify({ data: storage.getItem('article') }));
  });

  mock.post('/api/article', (req, res) => {
    const article = JSON.parse(req._body);
    storage.setItem('article', [
      ...storage.getItem('article'),
      new Article(article),
    ]);
    return res
      .status(200)
      .body(JSON.stringify({ data: storage.getItem('article') }));
  });

  mock.get(/\/api\/article\/.*/, (req, res) => {
    const id = req._url.path.split('/api/article/')[1];
    return res.status(200).body(
      JSON.stringify({
        data: storage.getItem('article').find(markdown => markdown.id === id),
      })
    );
  });

  mock.delete(/\/api\/article\/.*/, (req, res) => {
    const id = req._url.path.split('/api/article/')[1];
    const _articles = storage.getItem('article');
    _.remove(_articles, (article) => {
      return article.id === id;
    });
    storage.setItem('article', _articles);

    return res
      .status(200)
      .body(JSON.stringify({ data: storage.getItem('article') }));
  });

  mock.put(/\/api\/article\/.*/, (req, res) => {
    const id = req._url.path.split('/api/article/')[1];
    const { subject, content } = JSON.parse(req._body);

    storage.setItem(
      'article',
      storage
        .getItem('article')
        .map(markdown =>
          markdown.id === id ? new Article({ id, subject, content }) : markdown
        )
    );

    return res.status(200).body(
      JSON.stringify({
        data: storage.getItem('article').find(markdown => markdown.id === id),
      })
    );
  });
}
