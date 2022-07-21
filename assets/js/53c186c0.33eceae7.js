"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[607],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return u}});var a=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(o),u=r,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||i;return o?a.createElement(m,n(n({ref:t},d),{},{components:o})):a.createElement(m,n({ref:t},d))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,n=new Array(i);n[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,n[1]=s;for(var c=2;c<i;c++)n[c]=o[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},7547:function(e,t,o){o.r(t),o.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return h}});var a=o(7462),r=o(3366),i=(o(7294),o(3905)),n=["components"],s={},l="How we use RocksDB in Kvrocks",c={unversionedId:"Performance/how-we-use-rocksdb",id:"Performance/how-we-use-rocksdb",title:"How we use RocksDB in Kvrocks",description:"Kvrocks is an open-source key-value database that is based on rocksdb and compatible with Redis protocol. Intention to decrease the cost of memory and increase the capability while compared to Redis. We would focus on how we use RocksDB features to improve the performance of the Redis on disk. Hopes this helps people who want to improve performance on RocksDB.",source:"@site/docs/08-Performance/how-we-use-rocksdb.md",sourceDirName:"08-Performance",slug:"/Performance/how-we-use-rocksdb",permalink:"/docs/Performance/how-we-use-rocksdb",draft:!1,editUrl:"https://github.com/apache/incubator-kvrocks-website/tree/main/docs/08-Performance/how-we-use-rocksdb.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1658382244,formattedLastUpdatedAt:"7/21/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kvrocks Cluster Introduction",permalink:"/docs/Cluster/kvrocks-cluster-introduction"}},d={},h=[{value:"Background",id:"background",level:2},{value:"How To Profiling RocksDB",id:"how-to-profiling-rocksdb",level:2},{value:"Memtable Optimization",id:"memtable-optimization",level:3},{value:"Data Block Optimization",id:"data-block-optimization",level:3},{value:"Filter/Index Block",id:"filterindex-block",level:3},{value:"Data compression optimization",id:"data-compression-optimization",level:3},{value:"Cache optimization",id:"cache-optimization",level:3},{value:"Key-Value Separation",id:"key-value-separation",level:3},{value:"Kvrocks Roadmap",id:"kvrocks-roadmap",level:2}],p={toc:h};function u(e){var t=e.components,o=(0,r.Z)(e,n);return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-we-use-rocksdb-in-kvrocks"},"How we use RocksDB in Kvrocks"),(0,i.kt)("p",null,"Kvrocks is an open-source key-value database that is based on rocksdb and compatible with Redis protocol. Intention to decrease the cost of memory and increase the capability while compared to Redis. We would focus on how we use RocksDB features to improve the performance of the Redis on disk. Hopes this helps people who want to improve performance on RocksDB."),(0,i.kt)("h2",{id:"background"},"Background"),(0,i.kt)("p",null,"Let\u2019s have a look at how Kvrocks uses the RocksDB before introducing performance optimization. From the implementation side, Kvrocks would encode the Redis data structure into the key-values and write them into the different RocksDB\u2019s column families. There\u2019s five column family type in Kvrocks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Metadata Column Family: used to store the metadata(expired, size..) for complex data structures like Hash/Set/ZSet/List, also string key-value was stored in this column family"),(0,i.kt)("li",{parentName:"ul"},"Subkey Column Family: used to store key-values for complex data structures were mentioned before"),(0,i.kt)("li",{parentName:"ul"},"ZSetScore Column Family: only store the score of the sorted set"),(0,i.kt)("li",{parentName:"ul"},"PubSub Column Family: used to store and propagate pubsub messages between the master and replicas"),(0,i.kt)("li",{parentName:"ul"},"Propagated Column Family: used to propagate commands between the master and replicas")),(0,i.kt)("p",null,"Also, Kvrocks uses the RocksDB WAL to implement the replication, for more detail can see:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kvrocks.medium.com/distributed-disk-key-value-storage-kvrocks-7bc5101c8585"},"Kvrocks: An Open-Source Distributed Disk Key-Value Storage With Redis Protocol")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/KvrocksLabs/kvrocks/blob/unstable/docs/metadata-design.md"},"How to implement the Redis data structures on RocksDB"))),(0,i.kt)("p",null,"We can have a glance at the Kvrocks architecture from 10,000 feet view\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/465/0*8wSs0XMTigjuKUz-",alt:"image"})),(0,i.kt)("h2",{id:"how-to-profiling-rocksdb"},"How To Profiling RocksDB"),(0,i.kt)("h3",{id:"memtable-optimization"},"Memtable Optimization"),(0,i.kt)("p",null,"Currently, Kvrocks was using the SkipList Memtable. Compared with the HashSkipList Memtable, it has better performance when searching across multiple prefixes and uses less memory. Kvrocks also enabled the whole_key_filtering the option which would create a bloom filter for the key in the memtble, it can reduce the number of comparisons, thereby reducing the CPU usage during point query.\nRelated configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-C++"},"metadata_opts.memtable_whole_key_filtering = true\nmetadata_opts.memtable_prefix_bloom_size_ratio = 0.1\n")),(0,i.kt)("h3",{id:"data-block-optimization"},"Data Block Optimization"),(0,i.kt)("p",null,"Previously, Kvrocks used binary search when searching the data block, which may cause CPU cache miss and increase the CPU usage. As the point query was the most used scenario in the key-value service, so Kvrocks switched to the hash index to reduce the binary search comparisons. ",(0,i.kt)("strong",{parentName:"p"},"Official test data shows that this feature can reduce CPU utilization by 21.8% and increase throughput by 10%, but it will increase space usage by 4.6%.")," Compared with disk resources, CPU resources are more expensive. Under the trade-off, Kvrocks chose to enable the Hash index to improve the efficiency of point queries."),(0,i.kt)("p",null,"Related configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},"BlockBasedTableOptions::data_block_index_type = DataBlockIndexType::kDataBlockBinaryAndHash\nBlockBasedTableOptions::data_block_hash_table_util_ratio = 0.75\n")),(0,i.kt)("h3",{id:"filterindex-block"},"Filter/Index Block"),(0,i.kt)("p",null,"The old version of RocksDB used Bloom Filter of BlockBasedFilter type by default. The basic mechanism is to generate a Filter for every 2KB of Key-Value data, and finally form a Filter array. When searching, first check the Index Block, and for the Data Block that may have the Key, then use the corresponding Filter Block to determine whether the key exists or not."),(0,i.kt)("p",null,"The new version of RocksDB optimizes the original Filter mechanism by introducing Full Filter. Each SST has a Filter, which can check whether the Key exists or not in the SST and avoid reading the Index Block. However, in the scenario with a large key number in the SST, the Filter Block and Index Block will still be larger. For 256MB SST, the size of Index and Filter Block is about 0.5MB and 5MB, which is much larger than Data Block (usually 4\u201332KB). In the most ideal case, when the Index/Filter Block is completely stored in memory, it will only be read once per SST life cycle, but when it competes with the Data Block for the Block Cache, it is likely to be re-read from the disk due to being evicted. Do it many times, resulting in very serious read amplication."),(0,i.kt)("p",null,"Kvrocks\u2019 previous approach was to dynamically adjust the SST-related configuration so that the SST file will not be too large, thereby avoiding the Index/Filter Block from being too large. However, the problem with this mechanism is that when the amount of data is very large, too many SST files will take up more system resources and cause performance degradation. The new version of Kvrocks optimizes this and opens the related configuration of the Partitioned Block. The principle of the Partitioned Block is to add a secondary index to the Index/Filter Block. When reading the Index or Filter, the secondary index is first to read into the memory, and then Find the required partition Index Block according to the secondary index, and load it into the Block Cache."),(0,i.kt)("p",null,"The advantages of Partitioned Block are as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Increase the cache hit rate: Large Index/Filter Block will pollute the cache space. The large Block will be partitioned, allowing the Index/Filter Block to be loaded at a finer granularity, thereby effectively using the cache space"),(0,i.kt)("li",{parentName:"ul"},"Improve cache efficiency: The partition Index/Filter Block will become smaller, the lock competition in the Cache will be further reduced, and the efficiency under high concurrency will be improved"),(0,i.kt)("li",{parentName:"ul"},"Reduce IO utilization: When the cache Miss of the index/filter partition, only a small partition needs to be loaded from the disk. Compared with the Index/Filter Block that reads the entire SST file, this will make the load on the disk smaller")),(0,i.kt)("p",null,"Related configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},"format_version = 5\nindex_type = IndexType::kTwoLevelIndexSearch\nBlockBasedTableOptions::partition_filters = true\ncache_index_and_filter_blocks = true\npin_top_level_index_and_filter = true\ncache_index_and_filter_blocks_with_high_priority = true\npin_l0_filter_and_index_blocks_in_cache = true\noptimize_filters_for_memory = true\n")),(0,i.kt)("h3",{id:"data-compression-optimization"},"Data compression optimization"),(0,i.kt)("p",null,"RocksDB compresses the data when it\u2019s placed on the disk. We compared and tested different compression algorithms on Kvrocks and found that different compression algorithms have a great impact on performance, especially when CPU resources are tight, which will significantly increase latency."),(0,i.kt)("p",null,"The following figure shows the test data of compression speed and compression ratio of different compression algorithms:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/691/0*7xyadECpWc_Eqfvp",alt:"image"})),(0,i.kt)("p",null,"In Kvrocks, compression is not set for the SST of the L0 and L1 layers, because these two layers have a small amount of data. Compressing the data at these levels cannot reduce a lot of disk space, but not compressing the data at these levels can save CPU. Each Compaction from L0 to L1 needs to access all files in L1. In addition, the range scan cannot use Bloom Filter, and it needs to find all files in L0. If you do not need to decompress when reading data in L0 and L1, and writing data in L0 and L1 do not need to be compressed, then these two frequent CPU-intensive operations will take up less CPU, compared to the disk space saved by compression, it is more profitable."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Considering the trade-off between compression speed and compression ratio, Kvrocks mainly chooses two algorithms, LZ4 and ZSTD.")," For other levels, LZ4 is used because the compression algorithm is faster and the compression ratio is higher. RocksDB officially recommends using LZ4. For scenes with large data volume and low QPS, the last layer will be set to ZSTD to further reduce storage space and reduce costs. The advantage of ZSTD is that the compression ratio is higher and the compression speed is faster."),(0,i.kt)("h3",{id:"cache-optimization"},"Cache optimization"),(0,i.kt)("p",null,"For the simple data type (String type), the data is directly stored in Metadata CF, while for complex data types, only the metadata is stored in Metadata CF, and the actual data is stored in Subkey CF. Kvrocks previously allocated the same size of Block Cache to these two CFs by default. However, the online scene is complicated and the user\u2019s data type cannot be predicted, so it is not possible to allocate an appropriate Block Cache size to each CF in advance. If users use simple types and use complex types in different proportions, the Block Cache hit rate will decrease. Kvrocks shared the same large Block Cache to achieve a 30% improvement in the command rate of the Cache.\nIn addition, Row Cache is also introduced to deal with the problem of hotkeys. RocksDB checks Row Cache first, then Block Cache. For scenes with hot spots, data will be stored in Row Cache first to further improve Cache utilization."),(0,i.kt)("h3",{id:"key-value-separation"},"Key-Value Separation"),(0,i.kt)("p",null,"The LSM storage engine will store the Key and Value together. During the compaction process, both Key and Value will be rewritten. When the Value is large, it will cause serious write amplification problems. In response to this problem, the  ",(0,i.kt)("a",{parentName:"p",href:"https://www.usenix.org/system/files/conference/fast16/fast16-papers-lu.pdf"},"WiscKey")," paper proposed a Key-Value separation scheme. Based on this paper, the industry also realized the KV separation of LSM-type storage engines, such as RocksDB\u2019s BlobDB, PingCAP\u2019s Titan engine, Quantum engine used by Baidu\u2019s UNDB."),(0,i.kt)("p",null,"RocksDB 6.18 version re-implemented BlobDB (RocksDB\u2019s Key-Value separation scheme), integrated it into the main logic of RocksDB, and has been improving and optimizing BlobDB related features. ",(0,i.kt)("strong",{parentName:"p"},"Kvrocks introduced this feature in 2.0.5 to deal with scenarios with large values. Tests show that when Kvrocks turns on the KV separation switch, for the scenario where Value is 10KB, the write performance is increased by 2.5 times, and the read performance is not attenuated; the larger the value, the greater the write performance improvement, and the write performance is improved when the Value is 50KB. 5 times.")),(0,i.kt)("p",null,"Related configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},"ColumnFamilyOptions.enable_blob_files = config_->RocksDB.enable_blob_files;\nmin_blob_size = 4096\nblob_file_size = 128M\nblob_compression_type = lz4\nenable_blob_garbage_collection = true\nblob_garbage_collection_age_cutoff = 0.25\nblob_garbage_collection_force_threshold = 0.8\n")),(0,i.kt)("h2",{id:"kvrocks-roadmap"},"Kvrocks Roadmap"),(0,i.kt)("p",null,"2021 is coming to an end, the related work of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KvrocksLabs/kvrocks/projects/1"},"Kvrocks 2.0")," has been basically completed, and the plan of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KvrocksLabs/kvrocks/projects/2"},"Kvrocks 3.0")," has also been listed on Github. This article lists the following two important features."))}u.isMDXComponent=!0}}]);