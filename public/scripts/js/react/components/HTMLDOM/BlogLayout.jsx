// BlogLayout.jsx
console.log("Mounting BlogLayout.jsx <BlogLayout />");

import React from 'react';
import brand from '../../assets/images/ocean-alexander-logo.png';
import logo from '../../assets/images/ocean-alexander-pix.png';

const BlogLayout = () => (
<section className="section">
  <div className="container">

{/*<!-- FIRST ROW -->*/}
    <div className="tile is-ancestor">
      <div className="tile is-parent">
        <article className="tile is-child green post">
          <a className="post__category" href="">Show Tabs</a>
          <h2 className="post__title">Blog #1</h2>
          <div className="post__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt blandit tellus. Nam et varius lectus. Mauris placerat eros lorem, vitae aliquam elit viverra eget. Vestibulum et rhoncus ante.</div>
          <a className="post__permalink" href="">Learn more</a>
        </article>
      </div>

      <div className="tile is-6 is-parent">
        <article className="tile is-child pink post">
          <a className="post__category" href="">AC POWERR SELECT</a>
          <h2 className="post__title">Blog #2</h2>
          <div className="post__content">Pellentesque vestibulum dui in mauris varius, quis semper justo fringilla. Curabitur nec suscipit velit, eu aliquam sem. Aliquam erat volutpat. Praesent volutpat tincidunt porta. Mauris a maximus elit. Etiam ante tortor, faucibus sit amet gravida
            eget, accumsan et metus. Morbi sem metus, suscipit ac diam eget, aliquam pharetra est. Duis hendrerit nibh vel mi rhoncus sagittis. Suspendisse et lectus cursus, iaculis risus vitae, convallis nunc.</div>
          <a className="post__permalink" href="">Learn more</a>
        </article>
      </div>

      <div className="tile is-vertical is-parent">
        <article className="tile is-child blue post">
          <a className="post__category" href="">engines</a>
          <h2 className="post__title">Blog #3</h2>
          <div className="post__content">Cras aliquam sit amet turpis eget sodales. Praesent scelerisque aliquet rhoncus. Nunc rhoncus eros vehicula, sollicitudin ligula quis, ullamcorper nisl.</div>
          <a className="post__permalink" href="">Learn more</a>
        </article>
        <article className="tile is-child gold post">
          <a className="post__category" href="">ac main breakers</a>
          <h2 className="post__title">Blog #4</h2>
          <div className="post__content">Nulla neque tortor, posuere eget euismod sit amet, auctor non odio. Nulla quis aliquam nibh. Donec maximus metus nec posuere commodo.</div>
          <a className="post__permalink" href="">Learn more</a>
        </article>
      </div>
    </div>

{/*<!-- SECOND ROW -->*/}
    <div className="tile is-ancestor">
      <div className="tile is-6 is-parent">
        <article className="tile is-child gray post">
          <a className="post__category" href="">technology</a>
          <h2 className="post__title">Blog #5</h2>
          <div className="post__content">Duis mattis ex nisi, lobortis lacinia ipsum suscipit in. Quisque sed leo at purus eleifend porttitor. Quisque ultricies, erat a fringilla efficitur, urna arcu sodales erat, ac auctor mauris velit at elit. Duis fringilla diam egestas diam vehicula
            auctor. Cras non bibendum ex. Integer tempor mollis dignissim. Maecenas egestas tortor mi, in egestas mi vulputate vel. Suspendisse in mollis odio, et aliquet orci. Vivamus eleifend facilisis venenatis. Etiam lobortis nec turpis suscipit ullamcorper.
            Nunc vel lorem ac turpis luctus malesuada. Etiam vulputate vitae ex nec interdum. Maecenas condimentum volutpat turpis sed vulputate. Mauris egestas hendrerit fermentum. Proin non lacus dolor. Nulla ac hendrerit ante.</div>
          <a className="post__permalink" href="">Learn more</a>
        </article>
      </div>

      <div className="tile is-vertical is-parent">
        <article className="tile is-child blue post">
          <a className="post__category" href="">trends</a>
          <h2 className="post__title">Blog #6</h2>
          <div className="post__content"> Etiam ante tortor, faucibus sit amet gravida eget, accumsan et metus. Morbi sem metus, suscipit ac diam eget, aliquam pharetra est. Duis hendrerit nibh vel mi rhoncus sagittis. Suspendisse et lectus cursus.</div>
          <a className="post__permalink" href="">Learn more</a>
        </article>
        <article className="tile is-child gold post">
          <a className="post__category" href="">music</a>
          <h2 className="post__title">Blog #7</h2>
          <div className="post__content">Praesent rutrum turpis vitae massa dictum rhoncus. Nullam vel purus velit. Ut posuere velit quis arcu aliquet.</div>
          <a className="post__permalink" href="">Learn more</a>
        </article>
      </div>

      <div className="tile is-parent">
        <article className="tile is-child red post">
          <a className="post__category" href="">fashion</a>
          <h2 className="post__title">Blog #8</h2>
          <div className="post__content">Duis mattis ex nisi, lobortis lacinia ipsum suscipit in. Quisque sed leo at purus eleifend porttitor. Quisque ultricies, erat a fringilla efficitur, urna arcu sodales erat, ac auctor mauris velit at elit.</div>
          <a className="post__permalink" href="">Learn more</a>
        </article>
      </div>
    </div>

    {/*<!-- THIRD ROW -->*/}
    <div className="tile is-ancestor">
      <div className="tile is-8 is-vertical">
        <div className="tile fb-auto">
          <div className="tile is-parent">
            <article className="tile is-child blue post">
              <a className="post__category" href="">travel</a>
              <h2 className="post__title">Blog #9</h2>
              <div className="post__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt blandit tellus. Nam et varius lectus. Mauris placerat eros lorem, vitae aliquam.</div>
              <a className="post__permalink" href="">Learn more</a>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child gray post">
              <a className="post__category" href="">media</a>
              <h2 className="post__title">Blog #10</h2>
              <div className="post__content">Aliquam congue congue tempus. Aenean hendrerit nisl a massa venenatis bibendum. Nullam fermentum augue sit amet magna euismod luctus. Morbi massa neque.</div>
              <a className="post__permalink" href="">Learn more</a>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child red post">
              <a className="post__category" href="">animals</a>
              <h2 className="post__title">Blog #11</h2>
              <div className="post__content">Etiam ante tortor, faucibus sit amet gravida eget, accumsan et metus. Morbi sem metus, suscipit ac diam eget, aliquam pharetra est. Duis hendrerit nibh vel mi rhoncus sagittis. Suspendisse et lectus cursus.</div>
              <a className="post__permalink" href="">Learn more</a>
            </article>
          </div>
        </div>

        <div className="tile fb-auto">
          <div className="tile is-parent">
            <article className="tile is-child pink post">
              <a className="post__category" href="">technology</a>
              <h2 className="post__title">Blog #12</h2>
              <div className="post__content">Aliquam congue congue tempus. Aenean hendrerit nisl a massa venenatis bibendum. Nullam fermentum augue sit amet magna euismod luctus. Morbi massa neque.</div>
              <a className="post__permalink" href="">Learn more</a>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child gold post">
              <a className="post__category" href="">fashion</a>
              <h2 className="post__title">Blog #13</h2>
              <div className="post__content">Etiam ante tortor, faucibus sit amet gravida eget, accumsan et metus.</div>
              <a className="post__permalink" href="">Learn more</a>
            </article>
          </div>
        </div>
      </div>

      <div className="tile is-parent">
        <article className="tile is-child green post">
          <a className="post__category" href="">fashion</a>
          <h2 className="post__title">Blog #14</h2>
          <div className="post__content">Duis mattis ex nisi, lobortis lacinia ipsum suscipit in. Quisque sed leo at purus eleifend porttitor. Quisque ultricies, erat a fringilla efficitur.</div>
          <a className="post__permalink" href="">Learn more</a>
        </article>
      </div>
    </div>

  </div>
{/*<!-- /container -->*/}
</section>

);

export default BlogLayout;

// eof 

