/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      staleTime: {
        dynamic: 30,
      },
    },
    webpack: (config, { isServer }) => {
      if (isServer) {
        // Exclude the native modules from the Webpack bundle
        config.externals = [
          ...config.externals,
          '@node-rs/argon2'
        ];
      }
  
      return config;
    },
  };
  
  export default nextConfig;
  