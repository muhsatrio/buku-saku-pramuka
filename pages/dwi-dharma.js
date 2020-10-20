import Layout from '../components/MainLayout';
import MetaHead from '../components/MetaHead';
import ChapterNavigation from '../components/ChapterNavigation';
import ChapterTitle from '../components/ChapterTitle';
import DwiDharmaData from '../data/dwi-dharma';
import { BASE_PATH } from '../constants';

const title = 'Dwi Dharma Pramuka | Buku Saku Pramuka Digital';
const desc =
  'Penjelasan lengkap mengenai Dwi Dharma Pramuka di Buku Saku Pramuka Digital';
const url = BASE_PATH + '/dwi-dharma/';

function DwiDharmaPage() {
  return (
    <Layout>
			<MetaHead title={title} desc={desc} url={url}/>
      <ChapterNavigation nextLink="/tri-satya/" />
      <ChapterTitle subTitle="Dwi Dharma" title="Materi Pramuka" />

      <div className="text-left">
        <div
          className="mt-4 rounded overflow-hidden shadow-lg bg-card"
          id={DwiDharmaData.id}
        >
          <div className="relative">
            <img
              className="w-full"
              src="/assets/5930.jpg"
              alt="Anak-anak berkemah"
            />
          </div>
          <div className="px-6 py-4">
            <p>{DwiDharmaData.preface}</p>
            <div className="mt-4">
              <p>Isi {DwiDharmaData.title} adalah sebagai berikut :</p>
              <p className="mt-4 mb-2">{DwiDharmaData.data.origin.preface}</p>
              <ol>
                {DwiDharmaData.data.origin.data.map((li) => (
                  <li className="ml-8 list-decimal" key={li}>
                    {li}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      <ChapterNavigation nextLink="/tri-satya/" />
    </Layout>
  );
}

export function reportWebVitals({ id, name, label, value }) {
  ga('send', 'event', {
    eventCategory:
      label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    eventAction: name,
    eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    eventLabel: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  })
}

export default DwiDharmaPage;
